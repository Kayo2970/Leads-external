"use client";

import React, { useState } from "react";
import BorderGlow from "@/components/BorderGlow";
import { BoardMember } from "@/lib/board-data";
import { ShieldCheck, Linkedin } from "lucide-react";
import PlaceholderBadge from "@/components/PlaceholderBadge";
import { generateNumberedPlaceholderSvg } from "@/lib/placeholders";

interface BoardMemberCardProps {
  member: BoardMember;
  lightMode?: boolean;
}

export default function BoardMemberCard({ member, lightMode = false }: BoardMemberCardProps) {
  const placeholderSvg = member.placeholderId
    ? generateNumberedPlaceholderSvg({
        id: member.placeholderId,
        title: member.name,
        subtitle: member.role,
        category: member.roleGroup,
      })
    : null;

  const [imgSrc, setImgSrc] = useState<string>(
    member.image || placeholderSvg || ""
  );

  const handleImageError = () => {
    if (placeholderSvg && imgSrc !== placeholderSvg) {
      setImgSrc(placeholderSvg);
    }
  };

  if (lightMode) {
    return (
      <BorderGlow
        edgeSensitivity={30}
        glowColor="330 85 50"
        backgroundColor="#FFFFFF"
        borderRadius={24}
        glowRadius={35}
        glowIntensity={1.0}
        colors={["#9C1256", "#DE3F11", "#361C6A"]}
        animated={true}
        className="h-full shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <div className="p-6 group flex flex-col justify-between h-full text-[#1E0C3D] relative">
          <div>
            {/* Avatar / Photo & Role Badge */}
            <div className="flex items-start justify-between mb-4">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#DE3F11]/40 shadow-md group-hover:scale-105 transition-transform duration-300 bg-[#361C6A] flex items-center justify-center text-white font-extrabold text-xl shrink-0">
                {imgSrc ? (
                  <img
                    src={imgSrc}
                    onError={handleImageError}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <span>{member.initials}</span>
                )}
                {member.placeholderId && (
                  <PlaceholderBadge id={member.placeholderId} position="bottom-right" className="scale-75 origin-bottom-right" />
                )}
              </div>

              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r from-[#9C1256]/15 to-[#DE3F11]/15 text-[#9C1256] border border-[#DE3F11]/30 text-right max-w-[140px] truncate">
                {member.roleGroup}
              </span>
            </div>

            {/* Member Name */}
            <h3 className="text-lg font-bold text-[#1E0C3D] group-hover:text-[#DE3F11] transition-colors leading-snug">
              {member.name}
            </h3>

            {/* Role & Designation */}
            <p className="text-xs font-bold text-[#9C1256] mt-1 mb-0.5">
              {member.role}
            </p>
            <p className="text-xs text-slate-500 italic mb-3">
              {member.designation}
            </p>

            {/* Message or Bio */}
            {member.message ? (
              <p className="text-xs text-slate-700 leading-relaxed mb-4 border-l-2 border-[#DE3F11] pl-3 italic bg-purple-50/50 py-1 rounded-r-lg">
                "{member.message}"
              </p>
            ) : member.bio ? (
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {member.bio}
              </p>
            ) : null}
          </div>

          {/* Affiliation & Social Footer */}
          <div className="pt-3 border-t border-purple-100 flex items-center justify-between text-[11px] text-slate-500">
            <div className="flex items-center space-x-1.5 truncate mr-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DE3F11] shrink-0" />
              <span className="truncate font-medium">{member.affiliation}</span>
            </div>

            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-purple-100 hover:bg-[#DE3F11] text-[#361C6A] hover:text-white transition-colors shrink-0"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </BorderGlow>
    );
  }

  return (
    <BorderGlow
      edgeSensitivity={30}
      glowColor="330 85 50"
      backgroundColor="#2A1454"
      borderRadius={24}
      glowRadius={35}
      glowIntensity={1.0}
      colors={["#9C1256", "#DE3F11", "#FFFFFF"]}
      animated={true}
      className="h-full shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="p-6 group flex flex-col justify-between h-full text-white relative">
        <div>
          {/* Avatar / Photo & Role Badge */}
          <div className="flex items-start justify-between mb-4">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-[#DE3F11]/40 shadow-md group-hover:scale-105 transition-transform duration-300 bg-[#361C6A] flex items-center justify-center text-white font-extrabold text-xl shrink-0">
              {imgSrc ? (
                <img
                  src={imgSrc}
                  onError={handleImageError}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <span>{member.initials}</span>
              )}
              {member.placeholderId && (
                <PlaceholderBadge id={member.placeholderId} position="bottom-right" className="scale-75 origin-bottom-right" />
              )}
            </div>

            <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r from-[#9C1256]/30 to-[#DE3F11]/30 text-white border border-[#DE3F11]/40 text-right max-w-[140px] truncate">
              {member.roleGroup}
            </span>
          </div>

          {/* Member Name */}
          <h3 className="text-lg font-bold text-white group-hover:text-[#DE3F11] transition-colors leading-snug">
            {member.name}
          </h3>

          {/* Role & Designation */}
          <p className="text-xs font-bold text-[#DE3F11] mt-1 mb-0.5">
            {member.role}
          </p>
          <p className="text-xs text-white/70 italic mb-3">
            {member.designation}
          </p>

          {/* Message or Bio */}
          {member.message ? (
            <p className="text-xs text-white/80 leading-relaxed mb-4 border-l-2 border-[#DE3F11] pl-3 italic bg-white/5 py-1 rounded-r-lg">
              "{member.message}"
            </p>
          ) : member.bio ? (
            <p className="text-xs text-white/70 leading-relaxed mb-4">
              {member.bio}
            </p>
          ) : null}
        </div>

        {/* Affiliation & Social Footer */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
          <div className="flex items-center space-x-1.5 truncate mr-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#DE3F11] shrink-0" />
            <span className="truncate font-medium">{member.affiliation}</span>
          </div>

          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-white/10 hover:bg-[#DE3F11] text-white transition-colors shrink-0"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </BorderGlow>
  );
}
