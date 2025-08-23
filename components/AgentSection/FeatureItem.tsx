import { cn } from '@/lib/utils';
import { Feature } from '@/Types/AgentSection';

const FeatureItem: React.FC<{ feature: Feature }> = ({ feature }) => (
    <div
        className={cn(
            'relative mb-16 md:mb-12 lg:mb-20 flex items-start gap-4',
            feature.active ? '' : 'opacity-50'
        )}
    >
        <span
            className={cn(
                'absolute -left-10 mt-3 inline-block w-3.5 h-3.5 rounded-full',
                feature.active
                    ? 'bg-[#3AA8E7] shadow-[0_0_0_2px_rgba(58,168,231,0.25)]'
                    : 'bg-white'
            )}
        />
        <div className="space-y-2">
            <h3
                className={cn(
                    feature.active
                        ? 'text-white text-xl sm:text-2xl lg:text-3xl'
                        : 'text-gray-500 text-lg sm:text-xl lg:text-2xl',
                    'font-medium'
                )}
            >
                {feature.title}
            </h3>
            {feature.active && (
                <p className="text-white/70 text-sm sm:text-lg lg:text-xl leading-relaxed max-w-sm">
                    {feature.description}
                </p>
            )}
        </div>
    </div>
);

export default FeatureItem;