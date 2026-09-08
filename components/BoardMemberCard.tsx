import React from "react";
import { BoardMember } from "@/lib/board-data";
import { ShieldCheck, Award } from "lucide-react";

interface BoardMemberCardProps {
  member: BoardMember;
}

export default function BoardMemberCard({ member }: BoardMemberCardProps) {
  return (
    <div className="glass-panel rounded-3xl p-6 hover:border-brand-gold/60 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between">
      <div>
        {/* Avatar & Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-violet to-brand-violet-soft text-brand-gold font-extrabold text-xl flex items-center justify-center border border-brand-gold/40 shadow-md group-hover:scale-105 transition-transform duration-300">
            {member.initials}
          </div>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
            {member.roleGroup}
          </span>
        </div>

        {/* Member Name & Title */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-violet dark:group-hover:text-brand-gold transition-colors">
          {member.name}
        </h3>
        <p className="text-xs font-semibold text-brand-violet-soft mb-2">
          {member.title}
        </p>

        {/* Bio */}
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          {member.bio}
        </p>
      </div>

      {/* Affiliation footer */}
      <div className="pt-3 border-t border-brand-violet/10 flex items-center space-x-2 text-[11px] text-slate-500 dark:text-slate-400">
        <ShieldCheck className="w-3.5 h-3.5 text-brand-gold shrink-0" />
        <span className="truncate">{member.affiliation}</span>
      </div>
    </div>
  );
}
