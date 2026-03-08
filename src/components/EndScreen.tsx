import { useEffect } from "react";
import confetti from "canvas-confetti";
import GameCharacter, { CharacterPose } from "@/components/GameCharacter";
import { AnswerResult, questionTypeLabel } from "@/hooks/useGame";
import { WordEntry } from "@/data/wordList";

interface EndScreenProps {
  score: number;
  total: number;
  results: AnswerResult[];
  onRestart: () => void;
  onPracticeWeak: (words: WordEntry[]) => void;
}

const EndScreen = ({ score, total, results, onRestart, onPracticeWeak }: EndScreenProps) => {
  const pct = Math.round((score / total) * 100);
  const isPerfect = score === total;
  const isGreat = score >= Math.ceil(total * 0.7);

  // Deduplicate results by word (keep first occurrence)
  const seen = new Set<string>();
  const correctWords: AnswerResult[] = [];
  const incorrectWords: AnswerResult[] = [];
  for (const r of results) {
    if (seen.has(r.word.word)) continue;
    seen.add(r.word.word);
    if (r.correct) correctWords.push(r);
    else incorrectWords.push(r);
  }

  const emoji = isPerfect ? "🏆" : isGreat ? "🎉" : pct >= 50 ? "👍" : "💪";
  const message = isPerfect
    ? "PERFECT!"
    : isGreat
    ? "Excellent work!"
    : pct >= 50
    ? "Good effort!"
    : "Keep practicing! You've got this! 💪";

  useEffect(() => {
    if (isGreat) {
      const duration = isPerfect ? 3000 : 1500;
      const end = Date.now() + duration;
      const frame = () => {
        confetti({
          particleCount: isPerfect ? 8 : 4,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.6 },
          colors: ["#f59e0b", "#ef4444", "#10b981", "#3b82f6", "#8b5cf6"],
        });
        confetti({
          particleCount: isPerfect ? 8 : 4,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.6 },
          colors: ["#f59e0b", "#ef4444", "#10b981", "#3b82f6", "#8b5cf6"],
        });
        if (Date.now() < end) requestAnimationFrame(frame);
      };
      frame();
    }
  }, [isGreat, isPerfect]);

  const hasWeakWords = incorrectWords.length > 0;
  const characterPose: CharacterPose = isPerfect ? "celebrate" : hasWeakWords ? "thinking" : "happy";

  return (
    <div className="flex items-start gap-8 justify-center">
      <div className="flex-shrink-0 space-y-3 text-center">
        <GameCharacter pose={characterPose} />
        {hasWeakWords && (
          <p className="hidden md:block text-sm font-display font-semibold text-muted-foreground">
            Let's work on these! 💪
          </p>
        )}
      </div>

      <div className="w-full max-w-lg space-y-6 animate-slide-up">
        {/* Score summary */}
        <div className="text-center space-y-3">
          <div className={`text-6xl ${isPerfect ? "animate-bounce" : "animate-emoji-correct"}`}>{emoji}</div>
          <h2 className="font-display text-2xl font-bold text-foreground">{message}</h2>
          <div className="bg-card rounded-2xl p-6 border border-border shadow-md space-y-2">
            <div className="text-4xl font-display font-bold text-primary">{pct}%</div>
            <p className="text-muted-foreground text-sm">
              <span className="text-foreground font-semibold">{score}</span> out of{" "}
              <span className="text-foreground font-semibold">{total}</span> correct
            </p>
          </div>
        </div>

        {/* Results breakdown */}
        <div className="space-y-4">
          {/* Correct words */}
          {correctWords.length > 0 && (
            <div className="space-y-2">
              <h3 className="font-display font-semibold text-foreground flex items-center gap-2">
                ✅ Words you know
                <span className="text-xs font-normal text-muted-foreground">({correctWords.length})</span>
              </h3>
              <div className="bg-card border border-border rounded-xl divide-y divide-border max-h-48 overflow-y-auto">
                {correctWords.map((r) => (
                  <div key={r.word.word} className="px-4 py-2.5 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <span className="font-semibold text-foreground">{r.word.word}</span>
                      <span className="text-muted-foreground"> — {r.word.translation}</span>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {questionTypeLabel[r.questionType]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Incorrect words */}
          {incorrectWords.length > 0 && (
            <div className="space-y-2">
              <h3 className="font-display font-semibold text-foreground flex items-center gap-2">
                ❌ Words to practice
                <span className="text-xs font-normal text-muted-foreground">({incorrectWords.length})</span>
              </h3>
              <div className="bg-card border border-destructive/30 rounded-xl divide-y divide-border max-h-48 overflow-y-auto">
                {incorrectWords.map((r) => (
                  <div key={r.word.word} className="px-4 py-2.5 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <span className="font-semibold text-foreground">{r.word.word}</span>
                      <span className="text-destructive font-medium"> — {r.word.translation}</span>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {questionTypeLabel[r.questionType]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          {incorrectWords.length > 0 && (
            <button
              onClick={() => onPracticeWeak(incorrectWords.map((r) => r.word))}
              className="flex-1 px-6 py-3 rounded-lg bg-destructive text-destructive-foreground font-display font-semibold text-base hover:opacity-90 hover:scale-105 active:scale-95 transition-all"
            >
              Practice weak words 🎯
            </button>
          )}
          <button
            onClick={onRestart}
            className="flex-1 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-base hover:opacity-90 hover:scale-105 active:scale-95 transition-all"
          >
            Play Again 🔄
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndScreen;
