export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] flex items-center justify-center">
      <div className="text-center">
        {/* Loading Spinner */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-[#A8BCD0]/30" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#8B6F5C] animate-spin" />
        </div>
        
        {/* Brand Name */}
        <p className="font-serif text-2xl text-[#8B6F5C] tracking-widest">
          恆美
        </p>
      </div>
    </div>
  )
}
