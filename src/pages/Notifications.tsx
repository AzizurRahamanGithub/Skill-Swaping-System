import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Bell, X, MessageCircle, Repeat, AlertCircle, Trash2 } from 'lucide-react';

interface Notification {
  id: string;
  type: "swap" | "message" | "swap-accepted" | "update";
  title: string;
  description: string;
  time: string;
  unread: boolean;
  section: "Today" | "This Week";
  hasActions?: boolean;
}

const NotificationPanel = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'swap',
      title: 'New Swap Proposal',
      description: 'Sarah offered web design services in exchange for your photography skills.',
      time: '5 mins ago',
      unread: true,
      section: 'Today',
      hasActions: true
    },
    {
      id: '2',
      type: 'message',
      title: 'New Message',
      description: "Hey! I saw your listing for guitar lessons. I'm interested in trading my cooki",
      time: '1 hour ago',
      unread: true,
      section: 'Today'
    },
    {
      id: '3',
      type: 'swap-accepted',
      title: 'Swap Accepted! 🎉',
      description: 'Emily accepted your proposal! You can now exchange graphic design for',
      time: '2 hours ago',
      unread: true,
      section: 'Today'
    },
    {
      id: '4',
      type: 'message',
      title: 'New Message',
      description: "Hey! I saw your listing for guitar lessons. I'm interested in trading my cooki",
      time: '1 hour ago',
      unread: false,
      section: 'This Week'
    },
    {
      id: '5',
      type: 'swap-accepted',
      title: 'Swap Accepted! 🎉',
      description: 'Emily accepted your proposal! You can now exchange graphic design for',
      time: '2 hours ago',
      unread: false,
      section: 'This Week'
    }
  ]);

  const filters = [
    { name: 'All', count: 3, icon: null },
    { name: 'Swaps', count: 2, icon: Repeat },
    { name: 'Messages', count: 1, icon: MessageCircle },
    { name: 'Updates', count: 0, icon: AlertCircle }
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  const getNotificationIcon = (type: string) => {
    if (type === 'swap' || type === 'swap-accepted') {
      return <Repeat className="w-4 h-4 text-teal-600" />;
    }
    if (type === 'message') {
      return <MessageCircle className="w-4 h-4 text-teal-600" />;
    }
    return <AlertCircle className="w-4 h-4 text-teal-600" />;
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, unread: false } : n)
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const filteredNotifications = notifications.filter(n => {
    if (activeFilter === 'Swaps') return n.type === 'swap' || n.type === 'swap-accepted';
    if (activeFilter === 'Messages') return n.type === 'message';
    if (activeFilter === 'Updates') return n.type === 'update';
    return true;
  });

  const groupedNotifications = filteredNotifications.reduce((acc, notification) => {
    if (!acc[notification.section]) {
      acc[notification.section] = [];
    }
    acc[notification.section].push(notification);
    return acc;
  }, {} as Record<string, Notification[]>);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
    
      <main className="container mx-auto pt-24 pb-16">
        {/* Hero */}
        <section className=" py-16 ">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          {/* Panel Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Notifications</h1>
              <p className="text-gray-600 text-sm">
                You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
              </p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 mb-6">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.name}
                  onClick={() => setActiveFilter(filter.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === filter.name
                      ? 'bg-teal-600 text-white'
                      : 'bg-teal-50 text-teal-700 hover:bg-teal-100'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{filter.name}</span>
                  {filter.count > 0 && (
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      activeFilter === filter.name
                        ? 'bg-white/20 text-white'
                        : 'bg-teal-100 text-teal-700'
                    }`}>
                      {filter.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Notifications List */}
          <div className="space-y-6">
            {Object.entries(groupedNotifications).length === 0 ? (
              <div className="text-center py-12">
                <Bell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No notifications</p>
              </div>
            ) : (
              Object.entries(groupedNotifications).map(([section, sectionNotifications]) => (
                <div key={section}>
                  <h3 className="text-sm font-medium text-gray-500 mb-3">{section}</h3>
                  <div className="space-y-3">
                    {sectionNotifications.map((notification) => (
                      <div
                        key={notification.id}
                        onClick={() => markAsRead(notification.id)}
                        className={`flex items-start gap-4 p-4 rounded-xl transition-colors cursor-pointer ${
                          notification.unread
                            ? 'bg-teal-50/50'
                            : 'bg-gray-50'
                        } hover:bg-gray-100`}
                      >
                        {/* Icon */}
                        <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200">
                          {getNotificationIcon(notification.type)}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h4 className="font-semibold text-gray-900 text-sm">
                                  {notification.title}
                                </h4>
                                {notification.unread && (
                                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                                )}
                              </div>
                              <p className="text-gray-600 text-sm mt-1">
                                {notification.description}
                              </p>
                            </div>
                            <span className="text-gray-400 text-xs whitespace-nowrap">
                              {notification.time}
                            </span>
                          </div>

                          {/* Action Buttons */}
                          {notification.hasActions && notification.unread && (
                            <div className="flex gap-2 mt-3">
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  markAsRead(notification.id);
                                }}
                                className="flex items-center gap-2 px-4 py-1.5 bg-teal-600 text-white text-sm rounded-lg hover:bg-teal-700"
                              >
                                ✓ Accept
                              </button>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  deleteNotification(notification.id);
                                }}
                                className="flex items-center gap-2 px-4 py-1.5 bg-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-300"
                              >
                                ✕ Decline
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Delete Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteNotification(notification.id);
                          }}
                          className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        </section>
      </main>
         <Footer/>
    </div>
  );
};

export default NotificationPanel;