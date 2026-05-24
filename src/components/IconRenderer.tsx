/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Scissors,
  Leaf,
  Trees,
  Flower,
  Trash2,
  Sparkles,
  Calendar,
  Construction,
  Box,
  Droplet,
  Sun,
  ArrowDownToLine,
  FileText,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare
} from 'lucide-react';

interface IconRendererProps {
  name: string;
  className?: string;
}

export default function IconRenderer({ name, className = "w-6 h-6" }: IconRendererProps) {
  switch (name) {
    case 'Scissors':
      return <Scissors className={className} />;
    case 'Shrub':
      return <Leaf className={className} />; // Leaf works beautifully as hedges
    case 'Trees':
      return <Trees className={className} />;
    case 'Flower':
      return <Flower className={className} />;
    case 'Trash2':
      return <Trash2 className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Calendar':
      return <Calendar className={className} />;
    case 'Fence':
      return <Construction className={className} />; // Construction icon for traditional fence
    case 'Box':
      return <Box className={className} />;
    case 'Droplet':
      return <Droplet className={className} />;
    case 'GlassWater':
      return <Sun className={className} />; // Sun is perfect for crystal clear windows
    case 'ArrowDownToLine':
      return <ArrowDownToLine className={className} />;
    case 'FileCheck':
      return <FileText className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'Phone':
      return <Phone className={className} />;
    case 'Mail':
      return <Mail className={className} />;
    case 'MapPin':
      return <MapPin className={className} />;
    case 'Clock':
      return <Clock className={className} />;
    case 'MessageSquare':
      return <MessageSquare className={className} />;
    default:
      return <Sparkles className={className} />;
  }
}
