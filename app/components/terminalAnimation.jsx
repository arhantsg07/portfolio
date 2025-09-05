import {
    AnimatedSpan,
    Terminal, 
    TypingAnimation 
} from "./magicui/terminal";

export default function TerminalIntro() {
    return (
    <div className="flex items-center justify-center h-screen text-black-400 font-mono">
        <Terminal>
            <TypingAnimation>
                &gt; npm init portfolio
            </TypingAnimation>
            <AnimatedSpan delay={1500} className="text-green-500">
                <span>✅ Booting Portfolio ...</span>
            </AnimatedSpan>
            <AnimatedSpan delay={2500} className="text-green-500">
                <span>
                    ✅ Compiling passion for code ...
                </span>
            </AnimatedSpan>
            <AnimatedSpan delay={3000} className="text-green-500">
                <span>
                    ✅ Linking caffeine module ...
                </span>
            </AnimatedSpan>
            <AnimatedSpan delay={3500} className="text-green-500">
                <span>
                    ✅ Fetching latest projects ...
                </span>
            </AnimatedSpan>
            <AnimatedSpan delay={4000} className="text-green-500">
                <span>
                    ✅ Installing personal branding assests ...
                </span>
            </AnimatedSpan>
            <AnimatedSpan delay={4500} className="text-green-500">
                <span>
                    ✅ Spawning Terminal ...
                </span>
            </AnimatedSpan>
            <AnimatedSpan delay={5000} className="text-green-500">
                <span>
                    ✅ Deploying skills ...
                </span>
            </AnimatedSpan>

        </Terminal>

    </div>
    );
}
