export interface JournalEntry {
  id: string;
  date: string;
  title: string;
  content: string;
  tags: string[];
}

export const journalEntries: JournalEntry[] = [
  {
    id: 'neural-oscillations',
    date: '2025.01.15',
    title: 'On Neural Oscillations and Consciousness',
    content: `Working with NEST simulator today, watching the LIF neurons fire in synchronized bursts. There's something mesmerizing about the temporal patterns — they remind me of the rhythms I see in my own thought processes when I'm deep in a problem.

γ = 40-100Hz oscillations during focused attention. Makes me wonder: are we just biological neural networks optimizing for pattern recognition? The math suggests yes, but the experience feels like more.

> "The brain is not designed to multitask. When people think they're multitasking, they're actually just switching from one task to another very rapidly. And every time they do, there's a cognitive cost." — Earl Miller`,
    tags: ['neuroscience', 'consciousness', 'NEST']
  },
  {
    id: 'identity-fragments',
    date: '2025.01.12',
    title: 'Identity Fragments',
    content: `Am I a scientist who makes art, or an artist who happens to do science? The question feels less important now. Maybe the categorization itself is the problem.

Today I spent equal time debugging a neural network and arranging photos for my Instagram story. Both felt like acts of creation, pattern-seeking, meaning-making. The tools differ, but the underlying drive is the same: *understand → create → share → repeat*.

- Science: asking questions about how things work
- Art: asking questions about how things feel
- Entrepreneurship: asking questions about how things could be better

All three are forms of inquiry. All three require both rigor and intuition.`,
    tags: ['identity', 'creativity', 'philosophy']
  },
  {
    id: 'z3-theorem-prover',
    date: '2025.01.08',
    title: 'Learning Notes: Z3 Theorem Prover',
    content: `SMT (Satisfiability Modulo Theories) is like having a conversation with mathematical truth. You pose constraints, and Z3 either finds a solution or proves none exists.

\`\`\`
(declare-fun x () Real)
(declare-fun y () Real)
(assert (and (>= x 0) (<= x 10)))
(assert (and (>= y 0) (<= y 10)))
(assert (= (+ (* x x) (* y y)) 25))
(check-sat)
(get-model)
\`\`\`

The elegance is in the declarative nature — you describe what you want, not how to get there. It's constraint-based thinking, which feels different from imperative programming. More like having a dialogue with the mathematical universe.`,
    tags: ['formal methods', 'Z3', 'learning']
  }
];
