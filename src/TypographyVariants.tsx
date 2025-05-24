import { Typography } from './components/Typography';

const sizes = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'] as const;
const weights = ['thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'black'] as const;
const colors = ['primary', 'secondary', 'tertiary', 'white', 'black', 'gray-900', 'gray-700', 'gray-500', 'gray-300'] as const;
const alignments = ['left', 'center', 'right', 'justify'] as const;
const spacings = ['tight', 'normal', 'wide', 'wider', 'widest'] as const;

export const TypographyVariants = () => {
    return (
        <div className="p-6 space-y-20">

            {/* Headings */}
            <section>
                <Typography as="h2" size="2xl" weight="bold" color='tertiary' className='mb-5'>Headings</Typography>
                <div className="space-y-2">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                        <Typography key={n} as={`h${n}` as any} size={`${7 - n}xl` as any} weight="bold">
                            Heading H{n}
                        </Typography>
                    ))}
                </div>
            </section>

            {/* Paragraphs */}
            <section>
                <Typography as="h2" size="2xl" weight="bold" color='tertiary' className='mb-5'>Paragraphs</Typography>
                <div className="space-y-2">
                    <Typography as="p" size="base">This is a base paragraph.</Typography>
                    <Typography as="p" size="lg">This is a large paragraph.</Typography>
                    <Typography as="p" size="sm">This is a small paragraph.</Typography>
                </div>
            </section>

            {/* Labels & Captions */}
            <section>
                <Typography as="h2" size="2xl" weight="bold" color='tertiary' className='mb-5'>Labels & Captions</Typography>
                <div className="space-y-2">
                    <Typography as="label" size="sm" weight="medium">Label Text</Typography>
                    <Typography as="span" size="xs" color="tertiary">Caption / Helper text</Typography>
                </div>
            </section>

            {/* Sizes */}
            <section>
                <Typography as="h2" size="2xl" weight="bold" color='tertiary' className='mb-5'>Size Variants</Typography>
                <div className="space-y-1">
                    {sizes.map((s) => (
                        <Typography key={s} size={s}>
                            Size: {s}
                        </Typography>
                    ))}
                </div>
            </section>

            {/* Weights */}
            <section>
                <Typography as="h2" size="2xl" weight="bold" color='tertiary' className='mb-5'>Weight Variants</Typography>
                <div className="space-y-1">
                    {weights.map((w) => (
                        <Typography key={w} weight={w}>
                            Weight: {w}
                        </Typography>
                    ))}
                </div>
            </section>

            {/* Colors */}
            <section>
                <Typography as="h2" size="2xl" weight="bold" color='tertiary' className='mb-5'>Color Variants</Typography>
                <div className="space-y-1">
                    {colors.map((c) => (
                        <Typography key={c} color={c}>
                            Color: {c}
                        </Typography>
                    ))}
                </div>
            </section>

            {/* Alignments */}
            <section>
                <Typography as="h2" size="2xl" weight="bold" color='tertiary' className='mb-5'>Text Alignments</Typography>
                <div className="space-y-2">
                    {alignments.map((a) => (
                        <Typography key={a} align={a}>
                            This text is aligned: {a}
                        </Typography>
                    ))}
                </div>
            </section>

            {/* Letter Spacing */}
            <section>
                <Typography as="h2" size="2xl" weight="bold" color='tertiary' className='mb-5'>Letter Spacing</Typography>
                <div className="space-y-2">
                    {spacings.map((s) => (
                        <Typography key={s} spacing={s}>
                            Spacing: {s}
                        </Typography>
                    ))}
                </div>
            </section>
        </div>
    );
};
