import React from "react";
import { BoardMember } from "@/lib/board-data";
import { ShieldCheck } from "lucide-react";

interface BoardMemberCardProps {
  member: BoardMember;
}

export default function BoardMemberCard({ member }: BoardMemberCardProps) {
  return (
    <div className="glass-panel rounded-3xl p-6 hover:border-[#DE3F11]/60 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between border border-[#9C1256]/30">
      <div>
        {/* Avatar & Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#361C6A] to-[#241147] text-white font-extrabold text-xl flex items-center justify-center border border-[#DE3F11]/40 shadow-md group-hover:scale-105 transition-transform duration-300">
            {member.initials}
          </div>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r from-[#9C1256]/25 to-[#DE3F11]/25 text-white border border-[#DE3F11]/40">
            {member.roleGroup}
          </span>
        </div>

        {/* Member Name & Title */}
        <h3 className="text-lg font-bold text-white group-hover:text-[#DE3F11] transition-colors">
          {member.name}
        </h3>
        <p className="text-xs font-semibold text-white/80 mb-2">
          {member.title}
        </p>

        {/* Bio */}
        <p className="text-xs text-white/75 leading-relaxed mb-4">
          {member.bio}
        </p>
      </div>

      {/* Affiliation footer */}
      <div className="pt-3 border-t border-white/10 flex items-center space-x-2 text-[11px] text-white/60">
        <ShieldCheck className="w-3.5 h-3.5 text-[#DE3F11] shrink-0" />
        <span className="truncate">{member.affiliation}</span>
      </div>
    </div>
  );
}
