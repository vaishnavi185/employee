import React, { useState } from 'react';
import ContactList from './ContactList';

export default function Message() {
  const [selectedContact, setSelectedContact] = useState(null);
  const [allMessages, setAllMessages] = useState({});
  const [newMessage, setNewMessage] = useState('');

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message = {
      id: Date.now(),
      text: newMessage,
      sender: 'you',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setAllMessages((prev) => {
      const contactId = selectedContact.id;
      const updated = { ...prev };
      updated[contactId] = [...(updated[contactId] || []), message];
      return updated;
    });

    setNewMessage('');
  };

  const messagesForSelected =
    selectedContact && allMessages[selectedContact.id]
      ? allMessages[selectedContact.id]
      : [];

  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-sm h-screen w-full flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-[30%] flex flex-col pr-4 border-r overflow-hidden">
        <span className="text-[#87898a] text-lg font-semibold mb-2">Messages</span>
        <input
          className="border border-gray-300 rounded-lg px-2 py-1 mb-3"
          placeholder="Search messages"
        />
        <ContactList onSelectContact={handleSelectContact} />
      </div>

     
      <div className="w-[70%] flex flex-col h-full">
        {selectedContact ? (
          <>
            {/* Header */}
            <div className="flex items-center gap-4 p-4 border-b">
              <img
                src={selectedContact.avatar}
                alt={selectedContact.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h2 className="font-semibold text-lg">{selectedContact.name}</h2>
                <p className="text-sm text-gray-500">Online</p>
              </div>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messagesForSelected.length === 0 ? (
                <div className="text-gray-400 text-center mt-20">
                  Start your conversation with <strong>{selectedContact.name}</strong>
                </div>
              ) : (
                messagesForSelected.map((msg) => (
                  <div
                    key={msg.id}
                    className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                      msg.sender === 'you'
                        ? 'ml-auto bg-black-100 text-right'
                        : 'mr-auto bg-white'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p className="text-[10px] text-gray-400 mt-1">{msg.time}</p>
                  </div>
                ))
              )}
            </div>

            {/* Input Box */}
            <div className="p-4 border-t bg-white flex items-center gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message"
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
              />
              <button
                onClick={handleSendMessage}
                className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-black-700"
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a conversation to start chatting.
          </div>
        )}
      </div>
    </div>
  );
}
