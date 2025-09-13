export default function Contacts() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 space-y-3">
        <h1 className="text-xl font-bold text-white">Let's Connect</h1>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-white/90">etan7@u.rochester.edu</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-white/90">New York, NY</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-white/90">EST Timezone</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-white/90">Available to relocate</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-white/90">No Sponser needed</span>
          </div>

        </div>

        <div className="pt-2">
          <p className="text-xs text-white/70 leading-relaxed">
            Open to full-time opportunities, freelance projects, and interesting collaborations.
            Let's build something amazing together!
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 pt-3 mt-auto">
        <div className="text-center space-y-2">
          <div className="flex justify-center space-x-4 text-xs text-white/70">
            <span>LinkedIn</span>
            <span>•</span>
            <span>GitHub</span>
            <span>•</span>
            <span>Discord</span>
          </div>
          <p className="text-xs text-white/50">
            © 2025 Edward J Tan
          </p>
        </div>
      </div>
    </div>
  );
}
