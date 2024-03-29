import { cn } from '@/lib/utils';

const SkeletonBase = ({ className }: { className?: string }) => {
  return (
    <span
      className={cn(
        'inline-block relative overflow-hidden h-16 w-full bg-[#262626] rounded-md',
        `after:absolute after:inset-0 after:-translate-x-[50%] after:bg-gradient-to-r after:from-transparent after:via-[#303030] after:via-30% after:to-transparent after:to-50% after:animate-shimmer after:content-[''] after:angle`,
        className,
      )}
    ></span>
  );
};

export default SkeletonBase;
