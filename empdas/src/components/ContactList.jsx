import React from 'react';

const contacts = [
  {
    id: 1,
    name: 'Jenny Wilson',
    message: 'Hello, Cynthia! Your lesson request...',
    time: 'Just now',
    unread: 0,
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 2,
    name: 'Dominick Romaguera',
    message: 'Hey Jenny, I’ll prepare some to...',
    time: '10min ago',
    unread: 5,
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 3,
    name: 'Dolores Raynor',
    message: 'Already done! ✅ Btw I was loo...',
    time: '27min ago',
    unread: 3,
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    id: 4,
    name: 'Felicia Denesik',
    message: 'Is it module 1, right? Cause I’ve...',
    time: '2hr ago',
    unread: 0,
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: 5,
    name: 'Phyllis Witting',
    message: 'Will be looking forward to your...',
    time: '3hr ago',
    unread: 0,
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    id: 6,
    name: 'Jacquelyn Dach',
    message: 'Absolutely, loved the lesson 🙌...',
    time: '7hr ago',
    unread: 2,
    avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    id: 7,
    name: 'Guadalupe Harvey',
    message: 'How many indicators will the s...',
    time: '12hr ago',
    unread: 0,
    avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
  },
  {
    id: 8,
    name: 'Anya Waelchi',
    message: 'Hey team, I’ve finished with th...',
    time: '20min ago',
    unread: 1,
    avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
  }, {
    id: 8,
    name: 'Anya Waelchi',
    message: 'Hey team, I’ve finished with th...',
    time: '20min ago',
    unread: 1,
    avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
  }, {
    id: 8,
    name: 'Anya Waelchi',
    message: 'Hey team, I’ve finished with th...',
    time: '20min ago',
    unread: 1,
    avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
  }, {
    id: 8,
    name: 'Anya Waelchi',
    message: 'Hey team, I’ve finished with th...',
    time: '20min ago',
    unread: 1,
    avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
  }, {
    id: 8,
    name: 'Anya Waelchi',
    message: 'Hey team, I’ve finished with th...',
    time: '20min ago',
    unread: 1,
    avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
  }, {
    id: 8,
    name: 'Anya Waelchi',
    message: 'Hey team, I’ve finished with th...',
    time: '20min ago',
    unread: 1,
    avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
];

export default function ContactList() {
  return (
    <div className="flex flex-col divide-y divide-gray-200 w-full max-w-md mx-auto bg-white rounded-lg shadow-sm overflow-y-auto h-[720px]"> {/* <-- SCROLL */}
      {contacts.map((contact) => (
        <div key={contact.id} className="flex items-center p-4 hover:bg-gray-50 transition">
          <img
            src={contact.avatar}
            alt={contact.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">{contact.name}</span>
              <span className="text-xs text-gray-500">{contact.time}</span>
            </div>
            <div className="text-sm text-gray-600 truncate">
              {contact.message}
            </div>
          </div>
          {contact.unread > 0 && (
            <div className="ml-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              {contact.unread}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
