import { useState } from 'react';

interface MeetingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MeetingPopup({ isOpen, onClose }: MeetingPopupProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    meetingType: 'coffee-chat'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create Google Calendar meeting URL
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 7); // Default to next week
    const endDate = new Date(startDate);
    endDate.setMinutes(endDate.getMinutes() + 30); // 30-minute meeting

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meeting with Edward&dates=${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=Meeting with ${formData.name} (${formData.email})%0A%0AMessage: ${encodeURIComponent(formData.message)}&sf=true&output=xml`;
    
    window.open(googleCalendarUrl, '_blank');
    onClose();
    setFormData({ name: '', email: '', message: '', meetingType: 'coffee-chat' });
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-black border border-green-400/60 rounded-xl p-4 sm:p-6 w-full max-w-md shadow-2xl shadow-green-400/20 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">Book a Meeting</h2>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-green-400 mb-1">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-green-400 focus:outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm text-green-400 mb-1">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-green-400 focus:outline-none"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm text-green-400 mb-1">Meeting Type</label>
            <select
              value={formData.meetingType}
              onChange={(e) => setFormData({ ...formData, meetingType: e.target.value })}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-green-400 focus:outline-none"
            >
              <option value="coffee-chat">Coffee Chat</option>
              <option value="job-opportunity">Job Opportunity</option>
              <option value="project-collaboration">Project Collaboration</option>
              <option value="technical-discussion">Technical Discussion</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-green-400 mb-1">Message (Optional)</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-green-400 focus:outline-none h-20 resize-none"
              placeholder="What would you like to discuss?"
            />
          </div>

          <div className="flex space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-green-400 text-black rounded-lg hover:bg-green-500 transition-colors font-semibold"
            >
              Book Meeting
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}