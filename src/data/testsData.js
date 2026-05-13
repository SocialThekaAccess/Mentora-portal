// =============================================
// MENTORA BRIDGE — 7 Tests Data
// Age-based psychometric tests
// testType = WooCommerce product ka slug
// =============================================

export const TESTS = {

  // ─────────────────────────────────────────
  // TEST 1: Age 13–14 | Class 7–8
  // ─────────────────────────────────────────
  'age13-14': {
    title: 'Career Awareness Psychometric Test',
    subtitle: 'Age 13–14 | Class 7–8',
    duration: 30,
    totalQuestions: 36,
    sections: [
      {
        id: 'A',
        title: 'Module A — Personality & Behaviour',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 1,
            text: 'When I am in a group, I usually:',
            type: 'mcq',
            options: { A: 'Take the lead', B: 'Share ideas', C: 'Support quietly', D: 'Observe first' },
          },
          {
            id: 2,
            text: 'When something new starts, I feel:',
            type: 'mcq',
            options: { A: 'Excited', B: 'Curious', C: 'Unsure', D: 'Cautious' },
          },
          {
            id: 3,
            text: 'I prefer tasks that are:',
            type: 'mcq',
            options: { A: 'Challenging', B: 'People-oriented', C: 'Creative', D: 'Well-planned' },
          },
          {
            id: 4,
            text: 'If plans change suddenly, I:',
            type: 'mcq',
            options: { A: 'Adjust quickly', B: 'Ask others', C: 'Feel uncomfortable', D: 'Need time' },
          },
          {
            id: 5,
            text: 'Teachers describe me as:',
            type: 'mcq',
            options: { A: 'Confident', B: 'Cooperative', C: 'Imaginative', D: 'Disciplined' },
          },
          {
            id: 6,
            text: 'I make decisions by:',
            type: 'mcq',
            options: { A: 'Acting fast', B: 'Discussing', C: 'Thinking deeply', D: 'Following steps' },
          },
          {
            id: 7,
            text: 'I feel proud when:',
            type: 'mcq',
            options: { A: 'I achieve goals', B: 'I help others', C: 'I create something', D: 'I stay organised' },
          },
          {
            id: 8,
            text: 'I enjoy working:',
            type: 'mcq',
            options: { A: 'Independently', B: 'In teams', C: 'Creatively', D: 'Systematically' },
          },
        ],
      },
      {
        id: 'B',
        title: 'Module B — Strengths & Natural Abilities',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 9,
            text: 'I am naturally good at:',
            type: 'mcq',
            options: { A: 'Logical problems', B: 'Explaining things', C: 'Drawing/writing', D: 'Planning' },
          },
          {
            id: 10,
            text: 'Friends come to me for:',
            type: 'mcq',
            options: { A: 'Solutions', B: 'Advice', C: 'Ideas', D: 'Organisation' },
          },
          {
            id: 11,
            text: 'I enjoy subjects that need:',
            type: 'mcq',
            options: { A: 'Thinking', B: 'Speaking', C: 'Imagination', D: 'Accuracy' },
          },
          {
            id: 12,
            text: 'I feel confident when:',
            type: 'mcq',
            options: { A: 'Solving puzzles', B: 'Helping people', C: 'Expressing ideas', D: 'Completing tasks' },
          },
          {
            id: 13,
            text: 'My strength lies in:',
            type: 'mcq',
            options: { A: 'Analysis', B: 'Empathy', C: 'Creativity', D: 'Discipline' },
          },
          {
            id: 14,
            text: 'I prefer activities that:',
            type: 'mcq',
            options: { A: 'Test intelligence', B: 'Involve people', C: 'Involve design', D: 'Have structure' },
          },
          {
            id: 15,
            text: 'I learn fast when:',
            type: 'mcq',
            options: { A: 'I explore', B: 'I discuss', C: 'I visualise', D: 'I practise' },
          },
          {
            id: 16,
            text: 'I perform best when work is:',
            type: 'mcq',
            options: { A: 'Challenging', B: 'Meaningful', C: 'Expressive', D: 'Organised' },
          },
        ],
      },
      {
        id: 'C',
        title: 'Module C — Learning Style',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 17,
            text: 'I remember lessons best when:',
            type: 'mcq',
            options: { A: 'I read', B: 'I listen', C: 'I see visuals', D: 'I do activities' },
          },
          {
            id: 18,
            text: 'In class, I enjoy:',
            type: 'mcq',
            options: { A: 'Notes', B: 'Discussions', C: 'Diagrams', D: 'Experiments' },
          },
          {
            id: 19,
            text: 'Homework is easy when:',
            type: 'mcq',
            options: { A: 'Instructions are written', B: 'Someone explains', C: 'Examples are shown', D: 'I practise' },
          },
          {
            id: 20,
            text: 'I focus better when:',
            type: 'mcq',
            options: { A: "It's quiet", B: 'I can talk', C: 'I can see', D: 'I can move' },
          },
          {
            id: 21,
            text: 'My favourite revision style:',
            type: 'mcq',
            options: { A: 'Reading', B: 'Teaching others', C: 'Mind maps', D: 'Practice tests' },
          },
          {
            id: 22,
            text: 'I lose focus when:',
            type: 'mcq',
            options: { A: 'Too much talking', B: 'Too much reading', C: 'No visuals', D: 'No action' },
          },
        ],
      },
      {
        id: 'D',
        title: 'Module D — Interest Exploration',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 23,
            text: 'I enjoy learning about:',
            type: 'mcq',
            options: { A: 'Science & technology', B: 'People & society', C: 'Arts & creativity', D: 'Business & leadership' },
          },
          {
            id: 24,
            text: 'I follow content related to:',
            type: 'mcq',
            options: { A: 'Facts & experiments', B: 'Stories & emotions', C: 'Creative videos', D: 'Success & goals' },
          },
          {
            id: 25,
            text: 'I would love to try:',
            type: 'mcq',
            options: { A: 'Coding/robotics', B: 'Teaching/helping', C: 'Art/media', D: 'Organising events' },
          },
          {
            id: 26,
            text: 'School activities I enjoy:',
            type: 'mcq',
            options: { A: 'Quizzes', B: 'Social work', C: 'Drama/art', D: 'Leadership roles' },
          },
          {
            id: 27,
            text: 'I admire people who are:',
            type: 'mcq',
            options: { A: 'Intelligent', B: 'Kind', C: 'Creative', D: 'Successful' },
          },
          {
            id: 28,
            text: 'My curiosity is highest in:',
            type: 'mcq',
            options: { A: 'Innovation', B: 'Human behaviour', C: 'Design', D: 'Management' },
          },
          {
            id: 29,
            text: 'I enjoy solving:',
            type: 'mcq',
            options: { A: 'Technical problems', B: 'Emotional problems', C: 'Creative challenges', D: 'Practical issues' },
          },
          {
            id: 30,
            text: 'I imagine my future involving:',
            type: 'mcq',
            options: { A: 'Problem solving', B: 'Helping people', C: 'Creating ideas', D: 'Managing things' },
          },
        ],
      },
      {
        id: 'E',
        title: 'Module E — Self-Awareness & Mindset',
        instruction: 'Rate each statement (1 = Not true, 5 = Very true)',
        questions: [
          { id: 31, text: 'I believe I have unique strengths', type: 'rating' },
          { id: 32, text: 'I enjoy learning new things', type: 'rating' },
          { id: 33, text: 'I am comfortable trying new activities', type: 'rating' },
          { id: 34, text: 'I stay positive when things are difficult', type: 'rating' },
          { id: 35, text: 'I like improving myself', type: 'rating' },
          { id: 36, text: 'I feel confident about my abilities', type: 'rating' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // TEST 2: Age 14–15 | Class 9–10
  // ─────────────────────────────────────────
  'age14-15': {
    title: 'Stream Selection Psychometric Test',
    subtitle: 'Age 14–15 | Class 9–10',
    duration: 30,
    totalQuestions: 42,
    sections: [
      {
        id: 'A',
        title: 'Module A — Personality & Decision Style',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 1,
            text: 'When faced with an important academic decision, I usually:',
            type: 'mcq',
            options: { A: 'Decide confidently on my own', B: 'Discuss with parents/teachers', C: 'Analyse deeply', D: 'Feel confused and delay' },
          },
          {
            id: 2,
            text: 'Under exam pressure, I:',
            type: 'mcq',
            options: { A: 'Stay focused', B: 'Seek support', C: 'Overthink', D: 'Feel anxious' },
          },
          {
            id: 3,
            text: 'I prefer goals that are:',
            type: 'mcq',
            options: { A: 'Challenging', B: 'Meaningful', C: 'Well-planned', D: 'Flexible' },
          },
          {
            id: 4,
            text: 'In group work, I:',
            type: 'mcq',
            options: { A: 'Take leadership', B: 'Coordinate with others', C: 'Contribute ideas', D: 'Follow instructions' },
          },
          {
            id: 5,
            text: 'I feel most confident when:',
            type: 'mcq',
            options: { A: 'Competing', B: 'Helping others', C: 'Creating ideas', D: 'Completing tasks properly' },
          },
          {
            id: 6,
            text: 'I handle mistakes by:',
            type: 'mcq',
            options: { A: 'Correcting quickly', B: 'Asking guidance', C: 'Reflecting deeply', D: 'Feeling discouraged' },
          },
        ],
      },
      {
        id: 'B',
        title: 'Module B — Cognitive Strengths',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 7,
            text: 'I enjoy subjects that require:',
            type: 'mcq',
            options: { A: 'Logic & numbers', B: 'Reading & writing', C: 'Observation & creativity', D: 'Organisation & planning' },
          },
          {
            id: 8,
            text: 'I am naturally good at:',
            type: 'mcq',
            options: { A: 'Problem-solving', B: 'Communication', C: 'Visualising ideas', D: 'Managing tasks' },
          },
          {
            id: 9,
            text: 'I feel confident when:',
            type: 'mcq',
            options: { A: 'Solving equations', B: 'Writing answers', C: 'Designing or imagining', D: 'Structuring work' },
          },
          {
            id: 10,
            text: 'Teachers appreciate me for:',
            type: 'mcq',
            options: { A: 'Analytical thinking', B: 'Expression', C: 'Original ideas', D: 'Discipline' },
          },
          {
            id: 11,
            text: 'I learn best when concepts are:',
            type: 'mcq',
            options: { A: 'Logical', B: 'Explained', C: 'Visualised', D: 'Practised' },
          },
          {
            id: 12,
            text: 'I enjoy assessments that involve:',
            type: 'mcq',
            options: { A: 'Numerical problems', B: 'Long answers', C: 'Projects', D: 'Case studies' },
          },
          {
            id: 13,
            text: 'My strongest ability is:',
            type: 'mcq',
            options: { A: 'Reasoning', B: 'Language', C: 'Creativity', D: 'Organisation' },
          },
          {
            id: 14,
            text: 'I feel mentally energised when:',
            type: 'mcq',
            options: { A: 'Solving tough problems', B: 'Discussing topics', C: 'Creating content', D: 'Planning work' },
          },
        ],
      },
      {
        id: 'C',
        title: 'Module C — Academic Subject Suitability',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 15,
            text: 'I enjoy Science when it involves:',
            type: 'mcq',
            options: { A: 'Concepts & logic', B: 'Experiments', C: 'Real-life application', D: 'Step-by-step learning' },
          },
          {
            id: 16,
            text: 'I find Mathematics:',
            type: 'mcq',
            options: { A: 'Interesting', B: 'Manageable', C: 'Challenging', D: 'Stressful' },
          },
          {
            id: 17,
            text: 'I enjoy Social Science because:',
            type: 'mcq',
            options: { A: 'It explains systems', B: 'It tells stories', C: 'It connects to society', D: 'It involves analysis' },
          },
          {
            id: 18,
            text: 'Languages feel comfortable when:',
            type: 'mcq',
            options: { A: 'Writing essays', B: 'Reading', C: 'Expressing opinions', D: 'Presenting ideas' },
          },
          {
            id: 19,
            text: 'I perform best in exams that:',
            type: 'mcq',
            options: { A: 'Test logic', B: 'Test memory', C: 'Test application', D: 'Test clarity' },
          },
          {
            id: 20,
            text: 'I prefer studying:',
            type: 'mcq',
            options: { A: 'Abstract concepts', B: 'Theory & explanations', C: 'Case studies', D: 'Practical examples' },
          },
          {
            id: 21,
            text: 'Homework feels easy in subjects that:',
            type: 'mcq',
            options: { A: 'Need reasoning', B: 'Need writing', C: 'Need creativity', D: 'Need accuracy' },
          },
          {
            id: 22,
            text: 'I feel motivated to study:',
            type: 'mcq',
            options: { A: 'Science & Maths', B: 'Humanities subjects', C: 'Creative subjects', D: 'Commerce-related topics' },
          },
          {
            id: 23,
            text: 'I can imagine studying deeply:',
            type: 'mcq',
            options: { A: 'Physics/Chemistry', B: 'History/Political Science', C: 'Economics/Business', D: 'Design/Media' },
          },
          {
            id: 24,
            text: 'My academic comfort zone is:',
            type: 'mcq',
            options: { A: 'Numbers & logic', B: 'Reading & analysis', C: 'Expression & creativity', D: 'Structure & planning' },
          },
        ],
      },
      {
        id: 'D',
        title: 'Module D — Career Cluster Awareness',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 25,
            text: 'I am curious about careers that involve:',
            type: 'mcq',
            options: { A: 'Technology & innovation', B: 'People & society', C: 'Creativity & communication', D: 'Business & management' },
          },
          {
            id: 26,
            text: 'I enjoy content related to:',
            type: 'mcq',
            options: { A: 'Science & tech', B: 'Social issues', C: 'Media & design', D: 'Finance & startups' },
          },
          {
            id: 27,
            text: 'I would enjoy a future role that:',
            type: 'mcq',
            options: { A: 'Solves problems', B: 'Supports people', C: 'Expresses ideas', D: 'Makes decisions' },
          },
          {
            id: 28,
            text: 'I admire professionals who are:',
            type: 'mcq',
            options: { A: 'Intelligent', B: 'Empathetic', C: 'Creative', D: 'Strategic' },
          },
          {
            id: 29,
            text: 'I feel excited about learning skills like:',
            type: 'mcq',
            options: { A: 'Coding/analytics', B: 'Psychology/teaching', C: 'Writing/design', D: 'Finance/management' },
          },
          {
            id: 30,
            text: 'I see myself working in:',
            type: 'mcq',
            options: { A: 'Labs/tech spaces', B: 'Social environments', C: 'Creative industries', D: 'Corporate setups' },
          },
          {
            id: 31,
            text: 'I enjoy tasks that involve:',
            type: 'mcq',
            options: { A: 'Problem solving', B: 'Counselling/support', C: 'Designing', D: 'Planning & execution' },
          },
          {
            id: 32,
            text: 'My long-term curiosity lies in:',
            type: 'mcq',
            options: { A: 'Innovation', B: 'Human behaviour', C: 'Creative impact', D: 'Organisational growth' },
          },
        ],
      },
      {
        id: 'E',
        title: 'Module E — Learning Style & Work Preference',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 33,
            text: 'I learn best when:',
            type: 'mcq',
            options: { A: 'Reading', B: 'Listening', C: 'Seeing visuals', D: 'Doing activities' },
          },
          {
            id: 34,
            text: 'I prefer studying:',
            type: 'mcq',
            options: { A: 'Alone', B: 'With guidance', C: 'In groups', D: 'With structure' },
          },
          {
            id: 35,
            text: 'I stay focused when:',
            type: 'mcq',
            options: { A: "It's quiet", B: "It's interactive", C: "It's visual", D: "It's practical" },
          },
          {
            id: 36,
            text: 'My ideal study routine is:',
            type: 'mcq',
            options: { A: 'Flexible', B: 'Guided', C: 'Creative', D: 'Fixed' },
          },
          {
            id: 37,
            text: 'I prefer environment:',
            type: 'mcq',
            options: { A: 'Silent', B: 'Interactive', C: 'Visual', D: 'Practical' },
          },
        ],
      },
      {
        id: 'F',
        title: 'Module F — Emotional Intelligence',
        instruction: 'Rate each statement (1 = Not true, 5 = Very true)',
        questions: [
          { id: 38, text: 'I can manage stress during exams', type: 'rating' },
          { id: 39, text: 'I understand my emotions well', type: 'rating' },
          { id: 40, text: 'I accept feedback positively', type: 'rating' },
          { id: 41, text: 'I stay motivated despite setbacks', type: 'rating' },
          { id: 42, text: 'I feel confident discussing my future', type: 'rating' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // TEST 3: Age 15–16 | Class 10
  // ─────────────────────────────────────────
  'age15-16': {
    title: 'Career Direction Psychometric Test',
    subtitle: 'Age 15–16 | Class 10',
    duration: 40,
    totalQuestions: 50,
    sections: [
      {
        id: 'A',
        title: 'Module A — Personality & Work Orientation',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 1,
            text: 'When working on long academic goals, I am:',
            type: 'mcq',
            options: { A: 'Self-driven and consistent', B: 'Motivated with guidance', C: 'Motivated but distracted', D: 'Inconsistent' },
          },
          {
            id: 2,
            text: 'I prefer work that is:',
            type: 'mcq',
            options: { A: 'Challenging and analytical', B: 'Meaningful and people-oriented', C: 'Creative and expressive', D: 'Structured and result-driven' },
          },
          {
            id: 3,
            text: 'Under pressure, I usually:',
            type: 'mcq',
            options: { A: 'Perform better', B: 'Stay steady', C: 'Overthink', D: 'Feel anxious' },
          },
          {
            id: 4,
            text: 'I feel most confident when I:',
            type: 'mcq',
            options: { A: 'Solve complex problems', B: 'Support or guide others', C: 'Create or design something', D: 'Plan and execute tasks' },
          },
          {
            id: 5,
            text: 'My decision-making style is:',
            type: 'mcq',
            options: { A: 'Logical and quick', B: 'Consultative', C: 'Reflective', D: 'Cautious' },
          },
          {
            id: 6,
            text: 'Teachers describe me as:',
            type: 'mcq',
            options: { A: 'Intelligent', B: 'Responsible', C: 'Creative', D: 'Disciplined' },
          },
          {
            id: 7,
            text: 'I prefer recognition for:',
            type: 'mcq',
            options: { A: 'Performance', B: 'Contribution', C: 'Originality', D: 'Reliability' },
          },
        ],
      },
      {
        id: 'B',
        title: 'Module B — Cognitive & Aptitude Strengths',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 8,
            text: 'I enjoy tasks that require:',
            type: 'mcq',
            options: { A: 'Numbers & logic', B: 'Language & explanation', C: 'Creativity & design', D: 'Organisation & planning' },
          },
          {
            id: 9,
            text: 'I learn concepts fastest when:',
            type: 'mcq',
            options: { A: 'Understanding logic', B: 'Discussing ideas', C: 'Visualising concepts', D: 'Applying practically' },
          },
          {
            id: 10,
            text: 'I perform best in exams that test:',
            type: 'mcq',
            options: { A: 'Analytical ability', B: 'Written expression', C: 'Application & creativity', D: 'Accuracy & structure' },
          },
          {
            id: 11,
            text: 'My strongest mental ability is:',
            type: 'mcq',
            options: { A: 'Reasoning', B: 'Communication', C: 'Ideation', D: 'Execution' },
          },
          {
            id: 12,
            text: 'I feel mentally exhausted by:',
            type: 'mcq',
            options: { A: 'Rote learning', B: 'Long writing', C: 'Repetition', D: 'Unclear instructions' },
          },
          {
            id: 13,
            text: 'I am naturally good at:',
            type: 'mcq',
            options: { A: 'Problem solving', B: 'Explaining concepts', C: 'Creating content', D: 'Managing tasks' },
          },
          {
            id: 14,
            text: 'I enjoy assessments like:',
            type: 'mcq',
            options: { A: 'Numerical problems', B: 'Essays', C: 'Projects', D: 'Case studies' },
          },
          {
            id: 15,
            text: 'I prefer subjects that:',
            type: 'mcq',
            options: { A: 'Involve formulas', B: 'Involve theories', C: 'Involve imagination', D: 'Involve real-world use' },
          },
          {
            id: 16,
            text: 'My attention span is highest when:',
            type: 'mcq',
            options: { A: 'Thinking deeply', B: 'Interacting', C: 'Creating', D: 'Organising' },
          },
          {
            id: 17,
            text: 'I feel confident applying concepts to:',
            type: 'mcq',
            options: { A: 'New problems', B: 'Real-life situations', C: 'Creative outputs', D: 'Structured tasks' },
          },
        ],
      },
      {
        id: 'C',
        title: 'Module C — Academic Subject Suitability',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 18,
            text: 'Physics & Chemistry feel:',
            type: 'mcq',
            options: { A: 'Logical and interesting', B: 'Manageable', C: 'Difficult', D: 'Overwhelming' },
          },
          {
            id: 19,
            text: 'Mathematics feels:',
            type: 'mcq',
            options: { A: 'Enjoyable', B: 'Practical', C: 'Stressful', D: 'Avoidable' },
          },
          {
            id: 20,
            text: 'Biology interests me because:',
            type: 'mcq',
            options: { A: 'It explains systems', B: 'It relates to life', C: 'It requires memory', D: 'It needs precision' },
          },
          {
            id: 21,
            text: 'Economics & Business Studies feel:',
            type: 'mcq',
            options: { A: 'Logical', B: 'Relevant', C: 'Challenging', D: 'Interesting' },
          },
          {
            id: 22,
            text: 'Accountancy seems:',
            type: 'mcq',
            options: { A: 'Structured', B: 'Practical', C: 'Difficult', D: 'Boring' },
          },
          {
            id: 23,
            text: 'History/Political Science feel:',
            type: 'mcq',
            options: { A: 'Analytical', B: 'Informative', C: 'Lengthy', D: 'Engaging' },
          },
          {
            id: 24,
            text: 'Languages are:',
            type: 'mcq',
            options: { A: 'Comfortable', B: 'Expressive', C: 'Challenging', D: 'Easy' },
          },
          {
            id: 25,
            text: 'I perform best in subjects that:',
            type: 'mcq',
            options: { A: 'Need logic', B: 'Need explanation', C: 'Need application', D: 'Need memorisation' },
          },
          {
            id: 26,
            text: 'My strongest academic area currently is:',
            type: 'mcq',
            options: { A: 'Science & Maths', B: 'Commerce subjects', C: 'Humanities', D: 'Mixed' },
          },
          {
            id: 27,
            text: 'I can imagine studying deeply for 2 years:',
            type: 'mcq',
            options: { A: 'PCM/PCB', B: 'Commerce', C: 'Humanities', D: 'Interdisciplinary' },
          },
        ],
      },
      {
        id: 'D',
        title: 'Module D — Career Cluster Fitment',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 28,
            text: 'I am most interested in careers related to:',
            type: 'mcq',
            options: { A: 'Technology & engineering', B: 'Business & finance', C: 'Law, policy & society', D: 'Design, media & communication' },
          },
          {
            id: 29,
            text: 'I enjoy content about:',
            type: 'mcq',
            options: { A: 'Innovation & research', B: 'Startups & markets', C: 'Social issues', D: 'Creative industries' },
          },
          {
            id: 30,
            text: 'I see myself working in:',
            type: 'mcq',
            options: { A: 'Technical environments', B: 'Corporate setups', C: 'Public/service domains', D: 'Creative spaces' },
          },
          {
            id: 31,
            text: 'I would enjoy a role that:',
            type: 'mcq',
            options: { A: 'Solves technical problems', B: 'Manages people/resources', C: 'Influences society', D: 'Creates impact visually' },
          },
          {
            id: 32,
            text: 'I admire professionals who are:',
            type: 'mcq',
            options: { A: 'Experts', B: 'Leaders', C: 'Change-makers', D: 'Creators' },
          },
          {
            id: 33,
            text: 'I enjoy skills like:',
            type: 'mcq',
            options: { A: 'Coding/analytics', B: 'Financial planning', C: 'Research & writing', D: 'Designing & storytelling' },
          },
          {
            id: 34,
            text: 'My long-term motivation comes from:',
            type: 'mcq',
            options: { A: 'Innovation', B: 'Success & growth', C: 'Social impact', D: 'Expression' },
          },
          {
            id: 35,
            text: 'I see my future contributing through:',
            type: 'mcq',
            options: { A: 'Technology', B: 'Business', C: 'Society', D: 'Creativity' },
          },
          {
            id: 36,
            text: 'I am willing to invest effort in:',
            type: 'mcq',
            options: { A: 'Competitive exams', B: 'Professional courses', C: 'Academic depth', D: 'Skill portfolios' },
          },
          {
            id: 37,
            text: 'My career curiosity is strongest for:',
            type: 'mcq',
            options: { A: 'STEM', B: 'Commerce & Management', C: 'Humanities & Law', D: 'Creative & Media' },
          },
        ],
      },
      {
        id: 'E',
        title: 'Module E — Learning Style & Work Environment',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 38,
            text: 'I study best when:',
            type: 'mcq',
            options: { A: 'Alone', B: 'Guided', C: 'In groups', D: 'Practically' },
          },
          {
            id: 39,
            text: 'I prefer learning that is:',
            type: 'mcq',
            options: { A: 'Conceptual', B: 'Explained', C: 'Visual', D: 'Hands-on' },
          },
          {
            id: 40,
            text: 'My ideal future work environment is:',
            type: 'mcq',
            options: { A: 'Structured & technical', B: 'Organised & professional', C: 'People-focused', D: 'Flexible & creative' },
          },
          {
            id: 41,
            text: 'I manage my time:',
            type: 'mcq',
            options: { A: 'Very well', B: 'Fairly well', C: 'With difficulty', D: 'Poorly' },
          },
        ],
      },
      {
        id: 'F',
        title: 'Module F — Emotional Intelligence & Resilience',
        instruction: 'Rate each statement (1 = Not true, 5 = Very true)',
        questions: [
          { id: 42, text: 'I handle academic stress effectively', type: 'rating' },
          { id: 43, text: 'I understand my emotional reactions', type: 'rating' },
          { id: 44, text: 'I accept feedback constructively', type: 'rating' },
          { id: 45, text: 'I stay motivated during setbacks', type: 'rating' },
          { id: 46, text: 'I feel confident discussing my future plans', type: 'rating' },
        ],
      },
      {
        id: 'G',
        title: 'Module G — Decision Readiness & Goal Clarity',
        instruction: 'Rate each statement (1 = Not true, 5 = Very true)',
        questions: [
          { id: 47, text: 'I feel clear about my academic direction', type: 'rating' },
          { id: 48, text: 'I can commit to long-term goals', type: 'rating' },
          { id: 49, text: 'I am ready to make subject choices', type: 'rating' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // TEST 4: Age 16–17 | Class 11–12
  // ─────────────────────────────────────────
  'age16-17': {
    title: 'Course & Pathway Planning Psychometric Test',
    subtitle: 'Age 16–17 | Class 11–12',
    duration: 50,
    totalQuestions: 55,
    sections: [
      {
        id: 'A',
        title: 'Module A — Personality & Work Identity',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 1,
            text: 'I feel most fulfilled when my work:',
            type: 'mcq',
            options: { A: 'Solves complex problems', B: 'Leads or manages people', C: 'Creates something original', D: 'Impacts society' },
          },
          {
            id: 2,
            text: 'I prefer roles where I:',
            type: 'mcq',
            options: { A: 'Analyse and optimise', B: 'Plan and decide', C: 'Design and express', D: 'Research and support' },
          },
          {
            id: 3,
            text: 'I define success as:',
            type: 'mcq',
            options: { A: 'Expertise', B: 'Leadership', C: 'Creative impact', D: 'Meaningful contribution' },
          },
          {
            id: 4,
            text: 'I am most comfortable with:',
            type: 'mcq',
            options: { A: 'Technical challenges', B: 'Responsibility', C: 'Ambiguity', D: 'Long-term goals' },
          },
          {
            id: 5,
            text: 'My natural work style is:',
            type: 'mcq',
            options: { A: 'Independent', B: 'Strategic', C: 'Exploratory', D: 'Reflective' },
          },
          {
            id: 6,
            text: 'I enjoy recognition for:',
            type: 'mcq',
            options: { A: 'Accuracy', B: 'Results', C: 'Original ideas', D: 'Depth of understanding' },
          },
        ],
      },
      {
        id: 'B',
        title: 'Module B — Cognitive & Domain Aptitude',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 7,
            text: 'I enjoy tasks involving:',
            type: 'mcq',
            options: { A: 'Numbers & logic', B: 'Strategy & planning', C: 'Visualisation & design', D: 'Reading & analysis' },
          },
          {
            id: 8,
            text: 'I grasp concepts fastest when:',
            type: 'mcq',
            options: { A: 'Understanding principles', B: 'Seeing applications', C: 'Experimenting', D: 'Discussing ideas' },
          },
          {
            id: 9,
            text: 'My strongest academic skill is:',
            type: 'mcq',
            options: { A: 'Analytical reasoning', B: 'Decision making', C: 'Ideation', D: 'Interpretation' },
          },
          {
            id: 10,
            text: 'I perform best in assessments that test:',
            type: 'mcq',
            options: { A: 'Problem solving', B: 'Case analysis', C: 'Portfolio/projects', D: 'Written depth' },
          },
          {
            id: 11,
            text: 'I feel mentally energised by:',
            type: 'mcq',
            options: { A: 'Challenging problems', B: 'Competitive environments', C: 'Open-ended tasks', D: 'Research-based work' },
          },
          {
            id: 12,
            text: 'I am naturally good at:',
            type: 'mcq',
            options: { A: 'Quantitative analysis', B: 'Business judgement', C: 'Creative output', D: 'Conceptual understanding' },
          },
          {
            id: 13,
            text: 'I struggle most with:',
            type: 'mcq',
            options: { A: 'Rote memorisation', B: 'Unclear goals', C: 'Repetition', D: 'High-pressure speed' },
          },
          {
            id: 14,
            text: 'I prefer learning that is:',
            type: 'mcq',
            options: { A: 'Concept-driven', B: 'Application-driven', C: 'Project-driven', D: 'Theory-driven' },
          },
          {
            id: 15,
            text: 'My thinking style is:',
            type: 'mcq',
            options: { A: 'Logical', B: 'Strategic', C: 'Divergent', D: 'Analytical' },
          },
          {
            id: 16,
            text: 'I enjoy mastering skills that need:',
            type: 'mcq',
            options: { A: 'Precision', B: 'Leadership', C: 'Creativity', D: 'Research' },
          },
        ],
      },
      {
        id: 'C',
        title: 'Module C — Subject–Degree Alignment',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 17,
            text: 'Physics & Maths feel:',
            type: 'mcq',
            options: { A: 'Natural and interesting', B: 'Useful but demanding', C: 'Challenging', D: 'Avoidable' },
          },
          {
            id: 18,
            text: 'Chemistry/Biology interest me because:',
            type: 'mcq',
            options: { A: 'They explain systems', B: 'They have applications', C: 'They need memory', D: 'They need accuracy' },
          },
          {
            id: 19,
            text: 'Economics/Business Studies feel:',
            type: 'mcq',
            options: { A: 'Logical', B: 'Strategic', C: 'Manageable', D: 'Abstract' },
          },
          {
            id: 20,
            text: 'Accountancy appeals to me due to:',
            type: 'mcq',
            options: { A: 'Structure', B: 'Practical relevance', C: 'Accuracy', D: 'Clarity' },
          },
          {
            id: 21,
            text: 'Humanities subjects appeal to me because:',
            type: 'mcq',
            options: { A: 'They involve analysis', B: 'They involve society', C: 'They involve expression', D: 'They involve depth' },
          },
          {
            id: 22,
            text: 'I enjoy working with:',
            type: 'mcq',
            options: { A: 'Data', B: 'Systems', C: 'Ideas', D: 'People' },
          },
          {
            id: 23,
            text: 'I can imagine studying deeply for 4 years in:',
            type: 'mcq',
            options: { A: 'Technical subjects', B: 'Business-related subjects', C: 'Design/creative subjects', D: 'Social sciences' },
          },
          {
            id: 24,
            text: 'I prefer curriculum that is:',
            type: 'mcq',
            options: { A: 'Structured', B: 'Flexible', C: 'Studio-based', D: 'Research-based' },
          },
          {
            id: 25,
            text: 'I enjoy assignments that:',
            type: 'mcq',
            options: { A: 'Solve problems', B: 'Build strategies', C: 'Create outcomes', D: 'Analyse situations' },
          },
          {
            id: 26,
            text: 'My subject comfort zone aligns most with:',
            type: 'mcq',
            options: { A: 'STEM', B: 'Commerce & Management', C: 'Design & Media', D: 'Humanities & Research' },
          },
        ],
      },
      {
        id: 'D',
        title: 'Module D — Course Cluster Suitability',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 27,
            text: 'I see myself pursuing a degree in:',
            type: 'mcq',
            options: { A: 'Engineering / Technology', B: 'Management / Business', C: 'Design / Architecture / Media', D: 'Law / Social Sciences' },
          },
          {
            id: 28,
            text: 'I enjoy future roles that involve:',
            type: 'mcq',
            options: { A: 'Technical innovation', B: 'Decision making', C: 'Creative execution', D: 'Policy & impact' },
          },
          {
            id: 29,
            text: 'I am willing to invest time in:',
            type: 'mcq',
            options: { A: 'Competitive technical exams', B: 'Business case competitions', C: 'Portfolio development', D: 'Research & reading' },
          },
          {
            id: 30,
            text: 'I admire professionals who are:',
            type: 'mcq',
            options: { A: 'Experts', B: 'Leaders', C: 'Creators', D: 'Thinkers' },
          },
          {
            id: 31,
            text: 'I feel motivated by:',
            type: 'mcq',
            options: { A: 'Problem solving', B: 'Growth & success', C: 'Expression & originality', D: 'Purpose' },
          },
          {
            id: 32,
            text: 'I prefer a career path that is:',
            type: 'mcq',
            options: { A: 'Skill-intensive', B: 'Result-oriented', C: 'Flexible', D: 'Knowledge-driven' },
          },
          {
            id: 33,
            text: 'I enjoy preparing for:',
            type: 'mcq',
            options: { A: 'Objective exams', B: 'Aptitude & interviews', C: 'Portfolio reviews', D: 'Essay-based assessments' },
          },
          {
            id: 34,
            text: 'I see my long-term impact through:',
            type: 'mcq',
            options: { A: 'Innovation', B: 'Enterprise', C: 'Design', D: 'Society' },
          },
          {
            id: 35,
            text: 'I am excited by industries like:',
            type: 'mcq',
            options: { A: 'Tech & engineering', B: 'Finance & consulting', C: 'Media & design', D: 'Law, policy & education' },
          },
          {
            id: 36,
            text: 'My strongest career inclination currently is:',
            type: 'mcq',
            options: { A: 'Engineering/Tech', B: 'Management/Commerce', C: 'Design/Creative', D: 'Humanities/Law' },
          },
        ],
      },
      {
        id: 'E',
        title: 'Module E — Competitive Exam Suitability',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 37,
            text: 'I am comfortable with:',
            type: 'mcq',
            options: { A: 'High competition', B: 'Long preparation', C: 'Performance pressure', D: 'Subjective evaluation' },
          },
          {
            id: 38,
            text: 'I prefer exams that are:',
            type: 'mcq',
            options: { A: 'Objective & time-bound', B: 'Case-based', C: 'Portfolio-based', D: 'Essay-based' },
          },
          {
            id: 39,
            text: 'I can consistently study:',
            type: 'mcq',
            options: { A: '6–8 hours/day', B: '4–6 hours/day', C: '2–4 hours/day', D: 'Flexible hours' },
          },
          {
            id: 40,
            text: 'I perform best when exams test:',
            type: 'mcq',
            options: { A: 'Accuracy & speed', B: 'Decision making', C: 'Creativity', D: 'Depth' },
          },
          {
            id: 41,
            text: 'I feel confident preparing for exams like:',
            type: 'mcq',
            options: { A: 'JEE / CUET (STEM)', B: 'CUET / IPMAT / BBA exams', C: 'NID / NIFT / UCEED', D: 'CLAT / Humanities exams' },
          },
          {
            id: 42,
            text: 'My exam temperament is:',
            type: 'mcq',
            options: { A: 'Competitive', B: 'Strategic', C: 'Creative', D: 'Reflective' },
          },
        ],
      },
      {
        id: 'F',
        title: 'Module F — Learning Style & Work Environment',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 43,
            text: 'I learn best through:',
            type: 'mcq',
            options: { A: 'Concept mastery', B: 'Real-world cases', C: 'Projects & studios', D: 'Reading & discussion' },
          },
          {
            id: 44,
            text: 'I prefer a future work environment that is:',
            type: 'mcq',
            options: { A: 'Structured', B: 'Corporate', C: 'Flexible', D: 'Academic' },
          },
        ],
      },
      {
        id: 'G',
        title: 'Module G — Emotional Intelligence & Resilience',
        instruction: 'Rate each statement (1 = Not true, 5 = Very true)',
        questions: [
          { id: 45, text: 'I manage academic pressure well', type: 'rating' },
          { id: 46, text: 'I stay motivated during setbacks', type: 'rating' },
          { id: 47, text: 'I accept feedback positively', type: 'rating' },
          { id: 48, text: 'I remain focused on long-term goals', type: 'rating' },
        ],
      },
      {
        id: 'H',
        title: 'Module H — Career Maturity & Planning Readiness',
        instruction: 'Rate each statement (1 = Not true, 5 = Very true)',
        questions: [
          { id: 49, text: 'I feel clear about my degree preferences', type: 'rating' },
          { id: 50, text: 'I understand entry requirements for my target courses', type: 'rating' },
          { id: 51, text: 'I am actively building my profile', type: 'rating' },
          { id: 52, text: 'I seek relevant exposure opportunities', type: 'rating' },
          { id: 53, text: 'I plan beyond board exams', type: 'rating' },
          { id: 54, text: 'I can commit to long-term preparation', type: 'rating' },
          { id: 55, text: 'I feel ready to make informed choices', type: 'rating' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // TEST 5: Age 17–18 | Class 12
  // ─────────────────────────────────────────
  'age17-18': {
    title: 'Career Decision Psychometric Test',
    subtitle: 'Age 17–18 | Class 12',
    duration: 40,
    totalQuestions: 60,
    sections: [
      {
        id: 'A',
        title: 'Module A — Career Identity & Motivation',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 1,
            text: 'I feel most motivated when my future work:',
            type: 'mcq',
            options: { A: 'Solves complex problems', B: 'Creates measurable impact', C: 'Expresses ideas creatively', D: 'Influences society' },
          },
          {
            id: 2,
            text: 'I define career success as:',
            type: 'mcq',
            options: { A: 'Expertise', B: 'Leadership', C: 'Innovation', D: 'Purpose' },
          },
          {
            id: 3,
            text: 'I am driven mainly by:',
            type: 'mcq',
            options: { A: 'Intellectual challenge', B: 'Growth & achievement', C: 'Expression & originality', D: 'Meaning & contribution' },
          },
          {
            id: 4,
            text: 'I see my long-term identity as:',
            type: 'mcq',
            options: { A: 'Specialist', B: 'Leader', C: 'Creator', D: 'Change-maker' },
          },
          {
            id: 5,
            text: 'I prefer careers that:',
            type: 'mcq',
            options: { A: 'Are skill-intensive', B: 'Are result-oriented', C: 'Are flexible', D: 'Are research-driven' },
          },
          {
            id: 6,
            text: 'I feel most confident committing to a career that involves:',
            type: 'mcq',
            options: { A: 'Technical depth', B: 'Business responsibility', C: 'Creative ownership', D: 'Academic or social impact' },
          },
        ],
      },
      {
        id: 'B',
        title: 'Module B — Cognitive & Domain Aptitude',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 7,
            text: 'I enjoy tasks involving:',
            type: 'mcq',
            options: { A: 'Numbers & logic', B: 'Strategy & planning', C: 'Design & ideation', D: 'Reading & analysis' },
          },
          {
            id: 8,
            text: 'I grasp advanced concepts best when:',
            type: 'mcq',
            options: { A: 'Understanding principles', B: 'Applying them practically', C: 'Experimenting', D: 'Discussing deeply' },
          },
          {
            id: 9,
            text: 'My strongest academic ability is:',
            type: 'mcq',
            options: { A: 'Analytical reasoning', B: 'Decision making', C: 'Creative problem-solving', D: 'Conceptual understanding' },
          },
          {
            id: 10,
            text: 'I perform best in assessments that test:',
            type: 'mcq',
            options: { A: 'Accuracy & speed', B: 'Case analysis', C: 'Portfolios & projects', D: 'Essays & arguments' },
          },
          {
            id: 11,
            text: 'I feel mentally energised by:',
            type: 'mcq',
            options: { A: 'Complex problems', B: 'Competitive environments', C: 'Open-ended challenges', D: 'Research & reading' },
          },
          {
            id: 12,
            text: 'I naturally excel at:',
            type: 'mcq',
            options: { A: 'Quantitative work', B: 'Strategic thinking', C: 'Creative execution', D: 'Theoretical analysis' },
          },
          {
            id: 13,
            text: 'I struggle most with:',
            type: 'mcq',
            options: { A: 'Rote learning', B: 'Ambiguity', C: 'Repetition', D: 'High-pressure speed' },
          },
          {
            id: 14,
            text: 'My thinking style is:',
            type: 'mcq',
            options: { A: 'Logical', B: 'Strategic', C: 'Divergent', D: 'Reflective' },
          },
          {
            id: 15,
            text: 'I enjoy mastering skills that need:',
            type: 'mcq',
            options: { A: 'Precision', B: 'Leadership', C: 'Creativity', D: 'Academic depth' },
          },
        ],
      },
      {
        id: 'C',
        title: 'Module C — Subject–Degree Fit',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 16,
            text: 'Mathematics & Physics feel:',
            type: 'mcq',
            options: { A: 'Natural and enjoyable', B: 'Useful but demanding', C: 'Stressful', D: 'Avoidable' },
          },
          {
            id: 17,
            text: 'Chemistry/Biology interest me because:',
            type: 'mcq',
            options: { A: 'They explain systems', B: 'They have applications', C: 'They need memory', D: 'They require accuracy' },
          },
          {
            id: 18,
            text: 'Economics/Business Studies feel:',
            type: 'mcq',
            options: { A: 'Logical', B: 'Strategic', C: 'Manageable', D: 'Abstract' },
          },
          {
            id: 19,
            text: 'Accountancy appeals to me due to:',
            type: 'mcq',
            options: { A: 'Structure', B: 'Practical relevance', C: 'Accuracy', D: 'Clarity' },
          },
          {
            id: 20,
            text: 'Humanities subjects attract me because:',
            type: 'mcq',
            options: { A: 'Analysis', B: 'Society & policy', C: 'Expression', D: 'Research' },
          },
          {
            id: 21,
            text: 'I enjoy working primarily with:',
            type: 'mcq',
            options: { A: 'Data', B: 'Systems', C: 'Ideas', D: 'People' },
          },
          {
            id: 22,
            text: 'I can imagine studying deeply for 4 years in:',
            type: 'mcq',
            options: { A: 'STEM', B: 'Business/Management', C: 'Design/Creative fields', D: 'Humanities/Law' },
          },
          {
            id: 23,
            text: 'I prefer curriculum that is:',
            type: 'mcq',
            options: { A: 'Structured', B: 'Flexible', C: 'Studio/project-based', D: 'Research-intensive' },
          },
          {
            id: 24,
            text: 'My subject comfort zone aligns most with:',
            type: 'mcq',
            options: { A: 'Engineering & Technology', B: 'Management & Commerce', C: 'Design & Media', D: 'Law & Social Sciences' },
          },
        ],
      },
      {
        id: 'D',
        title: 'Module D — Career Cluster Confirmation',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 25,
            text: 'My strongest career inclination is:',
            type: 'mcq',
            options: { A: 'Engineering/Technology', B: 'Management/Finance', C: 'Design/Architecture/Media', D: 'Law/Policy/Research' },
          },
          {
            id: 26,
            text: 'I see myself working in:',
            type: 'mcq',
            options: { A: 'Tech or lab environments', B: 'Corporate or startup spaces', C: 'Creative studios', D: 'Academic or public institutions' },
          },
          {
            id: 27,
            text: 'I admire professionals who are:',
            type: 'mcq',
            options: { A: 'Experts', B: 'Leaders', C: 'Creators', D: 'Thinkers' },
          },
          {
            id: 28,
            text: 'I feel excited preparing for:',
            type: 'mcq',
            options: { A: 'Technical challenges', B: 'Business decisions', C: 'Creative output', D: 'Academic debates' },
          },
          {
            id: 29,
            text: 'I want my work to primarily:',
            type: 'mcq',
            options: { A: 'Innovate', B: 'Scale impact', C: 'Inspire', D: 'Influence society' },
          },
          {
            id: 30,
            text: 'I enjoy skills like:',
            type: 'mcq',
            options: { A: 'Coding/analytics', B: 'Strategy/finance', C: 'Design/storytelling', D: 'Writing/research' },
          },
          {
            id: 31,
            text: 'I am willing to invest effort in:',
            type: 'mcq',
            options: { A: 'Competitive technical exams', B: 'Professional aptitude tests', C: 'Portfolio building', D: 'Long-term academic preparation' },
          },
          {
            id: 32,
            text: 'My long-term career vision aligns most with:',
            type: 'mcq',
            options: { A: 'STEM careers', B: 'Business & management', C: 'Creative industries', D: 'Law, policy & academia' },
          },
          {
            id: 33,
            text: 'I feel confident pursuing this cluster seriously:',
            type: 'mcq',
            options: { A: 'Strongly agree', B: 'Agree', C: 'Unsure', D: 'Not confident' },
          },
        ],
      },
      {
        id: 'E',
        title: 'Module E — Admission Pathway Suitability',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 34,
            text: 'I am comfortable with:',
            type: 'mcq',
            options: { A: 'Highly competitive exams', B: 'Multi-stage selection processes', C: 'Portfolio & interviews', D: 'Subjective evaluation' },
          },
          {
            id: 35,
            text: 'I prefer admission systems that value:',
            type: 'mcq',
            options: { A: 'Rank & scores', B: 'Aptitude & interviews', C: 'Portfolios & projects', D: 'Academic depth' },
          },
          {
            id: 36,
            text: 'I can consistently prepare for exams:',
            type: 'mcq',
            options: { A: '6–8 hours/day', B: '4–6 hours/day', C: '2–4 hours/day', D: 'Flexible schedules' },
          },
          {
            id: 37,
            text: 'I perform best under:',
            type: 'mcq',
            options: { A: 'Time pressure', B: 'Case-based thinking', C: 'Creative evaluation', D: 'Written analysis' },
          },
          {
            id: 38,
            text: 'I feel confident preparing for exams like:',
            type: 'mcq',
            options: { A: 'JEE / NEET / CUET (STEM)', B: 'IPMAT / CUET / BBA exams', C: 'NID / NIFT / UCEED', D: 'CLAT / CUET (Humanities)' },
          },
          {
            id: 39,
            text: 'My exam temperament is:',
            type: 'mcq',
            options: { A: 'Competitive', B: 'Strategic', C: 'Creative', D: 'Reflective' },
          },
          {
            id: 40,
            text: 'I am open to alternative admission routes beyond exams:',
            type: 'mcq',
            options: { A: 'Yes', B: 'Somewhat', C: 'Not sure', D: 'No' },
          },
        ],
      },
      {
        id: 'F',
        title: 'Module F — India vs Study Abroad Readiness',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 41,
            text: 'I am comfortable studying independently:',
            type: 'mcq',
            options: { A: 'Very comfortable', B: 'Comfortable', C: 'Somewhat', D: 'Not comfortable' },
          },
          {
            id: 42,
            text: 'I adapt well to new environments:',
            type: 'mcq',
            options: { A: 'Very well', B: 'Well', C: 'With effort', D: 'Poorly' },
          },
          {
            id: 43,
            text: 'I am open to:',
            type: 'mcq',
            options: { A: 'Global exposure', B: 'Multicultural classrooms', C: 'Independent living', D: 'Structured support' },
          },
          {
            id: 44,
            text: 'My family is supportive of:',
            type: 'mcq',
            options: { A: 'Study abroad', B: 'Top Indian institutions', C: 'Both options', D: 'Unsure' },
          },
          {
            id: 45,
            text: 'I am prepared for:',
            type: 'mcq',
            options: { A: 'Holistic applications (SOPs, profiles)', B: 'Entrance-focused preparation', C: 'Portfolio-based admission', D: 'Mixed pathways' },
          },
          {
            id: 46,
            text: 'I feel emotionally ready to study away from home:',
            type: 'mcq',
            options: { A: 'Yes', B: 'Mostly', C: 'Unsure', D: 'Not yet' },
          },
        ],
      },
      {
        id: 'G',
        title: 'Module G — Learning Environment & College Fit',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 47,
            text: 'I learn best in institutions that are:',
            type: 'mcq',
            options: { A: 'Academically rigorous', B: 'Industry-oriented', C: 'Creativity-driven', D: 'Research-focused' },
          },
          {
            id: 48,
            text: 'I prefer colleges that offer:',
            type: 'mcq',
            options: { A: 'Strong placements', B: 'Internships & exposure', C: 'Flexibility & electives', D: 'Academic depth' },
          },
        ],
      },
      {
        id: 'H',
        title: 'Module H — Emotional Intelligence & Independence',
        instruction: 'Rate each statement (1 = Not true, 5 = Very true)',
        questions: [
          { id: 49, text: 'I manage academic stress effectively', type: 'rating' },
          { id: 50, text: 'I take responsibility for my decisions', type: 'rating' },
          { id: 51, text: 'I handle setbacks maturely', type: 'rating' },
          { id: 52, text: 'I communicate my goals clearly', type: 'rating' },
          { id: 53, text: 'I remain focused on long-term plans', type: 'rating' },
        ],
      },
      {
        id: 'I',
        title: 'Module I — Decision Readiness & Commitment',
        instruction: 'Rate each statement (1 = Not true, 5 = Very true)',
        questions: [
          { id: 54, text: 'I feel clear about my degree choice', type: 'rating' },
          { id: 55, text: 'I understand admission requirements well', type: 'rating' },
          { id: 56, text: 'I am actively preparing my profile', type: 'rating' },
          { id: 57, text: 'I can commit to my chosen pathway', type: 'rating' },
          { id: 58, text: 'I feel confident finalising decisions', type: 'rating' },
          { id: 59, text: 'I am ready to take ownership of my future', type: 'rating' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // TEST 6: Age 18–22 | College Students
  // ─────────────────────────────────────────
  'age18-22': {
    title: 'Specialisation & Career Roadmap Psychometric Test',
    subtitle: 'Age 18–22 | College Students',
    duration: '60-75',
    totalQuestions: 65,
    sections: [
      {
        id: 'A',
        title: 'Module A — Career Identity & Motivation',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 1,
            text: 'I feel most fulfilled when my work:',
            type: 'mcq',
            options: { A: 'Solves complex problems', B: 'Creates measurable results', C: 'Allows creative expression', D: 'Contributes to society' },
          },
          {
            id: 2,
            text: 'I currently identify myself more as:',
            type: 'mcq',
            options: { A: 'A technical/problem solver', B: 'A leader/decision maker', C: 'A creator/innovator', D: 'A thinker/researcher' },
          },
          {
            id: 3,
            text: 'My biggest career motivation is:',
            type: 'mcq',
            options: { A: 'Mastery & expertise', B: 'Growth & recognition', C: 'Freedom & creativity', D: 'Purpose & impact' },
          },
          {
            id: 4,
            text: 'I prefer career paths that are:',
            type: 'mcq',
            options: { A: 'Skill-intensive', B: 'Result-oriented', C: 'Flexible & evolving', D: 'Academically deep' },
          },
          {
            id: 5,
            text: 'I feel confident committing long-term to:',
            type: 'mcq',
            options: { A: 'A technical domain', B: 'A business/management role', C: 'A creative profession', D: 'An academic/research path' },
          },
          {
            id: 6,
            text: 'My definition of success is closest to:',
            type: 'mcq',
            options: { A: 'Being highly skilled', B: 'Leading teams/projects', C: 'Creating original work', D: 'Making meaningful impact' },
          },
          {
            id: 7,
            text: 'At this stage, my career clarity is:',
            type: 'mcq',
            options: { A: 'Very clear', B: 'Fairly clear', C: 'Somewhat unclear', D: 'Very unclear' },
          },
        ],
      },
      {
        id: 'B',
        title: 'Module B — Cognitive & Professional Aptitude',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 8,
            text: 'I naturally excel at:',
            type: 'mcq',
            options: { A: 'Analytical reasoning', B: 'Strategic thinking', C: 'Creative problem-solving', D: 'Conceptual analysis' },
          },
          {
            id: 9,
            text: 'I perform best in tasks that involve:',
            type: 'mcq',
            options: { A: 'Data & logic', B: 'Planning & decisions', C: 'Design & ideation', D: 'Research & writing' },
          },
          {
            id: 10,
            text: 'I enjoy learning when it is:',
            type: 'mcq',
            options: { A: 'Concept-driven', B: 'Application-driven', C: 'Project-based', D: 'Theory-driven' },
          },
          {
            id: 11,
            text: 'My strongest professional skill currently is:',
            type: 'mcq',
            options: { A: 'Technical accuracy', B: 'Judgement & coordination', C: 'Innovation & ideation', D: 'Depth of understanding' },
          },
          {
            id: 12,
            text: 'I feel mentally drained by:',
            type: 'mcq',
            options: { A: 'Repetitive tasks', B: 'Ambiguity', C: 'Rigid rules', D: 'High-speed pressure' },
          },
          {
            id: 13,
            text: 'I prefer assessments that test:',
            type: 'mcq',
            options: { A: 'Problem solving', B: 'Case analysis', C: 'Portfolios/projects', D: 'Research depth' },
          },
          {
            id: 14,
            text: 'My thinking style is mostly:',
            type: 'mcq',
            options: { A: 'Logical', B: 'Strategic', C: 'Divergent', D: 'Reflective' },
          },
          {
            id: 15,
            text: 'I enjoy mastering skills that need:',
            type: 'mcq',
            options: { A: 'Precision', B: 'Leadership', C: 'Creativity', D: 'Academic depth' },
          },
          {
            id: 16,
            text: 'I learn fastest when:',
            type: 'mcq',
            options: { A: 'Understanding principles', B: 'Applying concepts', C: 'Experimenting', D: 'Discussing deeply' },
          },
          {
            id: 17,
            text: 'I feel confident applying my skills in:',
            type: 'mcq',
            options: { A: 'Technical roles', B: 'Business environments', C: 'Creative fields', D: 'Research/academic settings' },
          },
        ],
      },
      {
        id: 'C',
        title: 'Module C — Specialisation Validation',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 18,
            text: 'My current major/specialisation feels:',
            type: 'mcq',
            options: { A: 'Strongly aligned', B: 'Mostly aligned', C: 'Partially aligned', D: 'Misaligned' },
          },
          {
            id: 19,
            text: 'I chose my specialisation mainly because:',
            type: 'mcq',
            options: { A: 'Interest & aptitude', B: 'Career prospects', C: 'External influence', D: 'Limited options' },
          },
          {
            id: 20,
            text: 'My coursework makes me feel:',
            type: 'mcq',
            options: { A: 'Energised', B: 'Competent', C: 'Neutral', D: 'Disengaged' },
          },
          {
            id: 21,
            text: 'I enjoy advanced subjects that involve:',
            type: 'mcq',
            options: { A: 'Technical depth', B: 'Practical application', C: 'Creative exploration', D: 'Conceptual analysis' },
          },
          {
            id: 22,
            text: 'I can imagine specialising further in:',
            type: 'mcq',
            options: { A: 'Core technical area', B: 'Applied/managerial area', C: 'Creative/interdisciplinary area', D: 'Research/theoretical area' },
          },
          {
            id: 23,
            text: 'My academic strengths match my specialisation:',
            type: 'mcq',
            options: { A: 'Very well', B: 'Fairly well', C: 'Somewhat', D: 'Poorly' },
          },
          {
            id: 24,
            text: 'I feel confident explaining my specialisation to others:',
            type: 'mcq',
            options: { A: 'Yes, clearly', B: 'Mostly', C: 'With difficulty', D: 'Not at all' },
          },
          {
            id: 25,
            text: 'I see long-term growth potential in this domain:',
            type: 'mcq',
            options: { A: 'Strongly agree', B: 'Agree', C: 'Unsure', D: 'Disagree' },
          },
          {
            id: 26,
            text: 'If I could re-choose, I would:',
            type: 'mcq',
            options: { A: 'Choose the same', B: 'Slightly modify', C: 'Change specialisation', D: 'Change field entirely' },
          },
          {
            id: 27,
            text: 'My interest in this field over time has:',
            type: 'mcq',
            options: { A: 'Increased', B: 'Remained stable', C: 'Reduced', D: 'Fluctuated a lot' },
          },
        ],
      },
      {
        id: 'D',
        title: 'Module D — Career Pathway Fit',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 28,
            text: 'I see myself primarily pursuing:',
            type: 'mcq',
            options: { A: 'Industry job', B: 'Entrepreneurship/startup', C: 'Higher studies', D: 'Research/academia' },
          },
          {
            id: 29,
            text: 'I prefer roles that:',
            type: 'mcq',
            options: { A: 'Solve technical problems', B: 'Manage people/processes', C: 'Create/design outcomes', D: 'Analyse and advise' },
          },
          {
            id: 30,
            text: 'I am most excited by career paths in:',
            type: 'mcq',
            options: { A: 'Technology/engineering', B: 'Business/consulting/finance', C: 'Design/media/product', D: 'Policy/research/education' },
          },
          {
            id: 31,
            text: 'I enjoy work that is:',
            type: 'mcq',
            options: { A: 'Skill-intensive', B: 'Target-driven', C: 'Open-ended', D: 'Knowledge-driven' },
          },
          {
            id: 32,
            text: 'I am comfortable with career paths that are:',
            type: 'mcq',
            options: { A: 'Competitive', B: 'Fast-paced', C: 'Uncertain', D: 'Long-term' },
          },
          {
            id: 33,
            text: 'I am willing to invest time in:',
            type: 'mcq',
            options: { A: 'Technical mastery', B: 'Professional networking', C: 'Portfolio building', D: 'Research publications' },
          },
          {
            id: 34,
            text: 'I see my long-term impact through:',
            type: 'mcq',
            options: { A: 'Innovation', B: 'Business growth', C: 'Creative influence', D: 'Thought leadership' },
          },
          {
            id: 35,
            text: 'My strongest career inclination currently is:',
            type: 'mcq',
            options: { A: 'Core technical roles', B: 'Management/business roles', C: 'Creative roles', D: 'Academic/research roles' },
          },
          {
            id: 36,
            text: 'I feel confident pursuing this pathway seriously:',
            type: 'mcq',
            options: { A: 'Very confident', B: 'Confident', C: 'Unsure', D: 'Not confident' },
          },
          {
            id: 37,
            text: 'I have clarity on entry-level roles in my field:',
            type: 'mcq',
            options: { A: 'Yes', B: 'Mostly', C: 'Somewhat', D: 'No' },
          },
        ],
      },
      {
        id: 'E',
        title: 'Module E — Work Environment & Role Preference',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 38,
            text: 'I work best in environments that are:',
            type: 'mcq',
            options: { A: 'Structured & technical', B: 'Corporate & goal-oriented', C: 'Flexible & creative', D: 'Academic & reflective' },
          },
          {
            id: 39,
            text: 'I prefer organisations that offer:',
            type: 'mcq',
            options: { A: 'Technical learning', B: 'Career growth', C: 'Creative freedom', D: 'Intellectual depth' },
          },
          {
            id: 40,
            text: 'I enjoy roles that involve:',
            type: 'mcq',
            options: { A: 'Independent work', B: 'Team leadership', C: 'Collaboration', D: 'Mentoring' },
          },
          {
            id: 41,
            text: 'My preferred work pace is:',
            type: 'mcq',
            options: { A: 'Intense & focused', B: 'Balanced', C: 'Flexible', D: 'Slow & deep' },
          },
          {
            id: 42,
            text: 'I am comfortable with ambiguity at work:',
            type: 'mcq',
            options: { A: 'Very comfortable', B: 'Comfortable', C: 'Slightly uncomfortable', D: 'Uncomfortable' },
          },
          {
            id: 43,
            text: 'I prefer feedback that is:',
            type: 'mcq',
            options: { A: 'Direct & technical', B: 'Result-oriented', C: 'Creative & qualitative', D: 'Reflective & detailed' },
          },
          {
            id: 44,
            text: 'My ideal role title would include:',
            type: 'mcq',
            options: { A: 'Engineer/Analyst', B: 'Manager/Consultant', C: 'Designer/Creator', D: 'Researcher/Scholar' },
          },
        ],
      },
      {
        id: 'F',
        title: 'Module F — Industry Readiness & Skills',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 45,
            text: 'I currently possess relevant hard skills for my field:',
            type: 'mcq',
            options: { A: 'Strongly', B: 'Moderately', C: 'Slightly', D: 'Not yet' },
          },
          {
            id: 46,
            text: 'I have completed:',
            type: 'mcq',
            options: { A: 'Multiple internships', B: '1–2 internships', C: 'Short projects', D: 'None' },
          },
          {
            id: 47,
            text: 'My resume/profile reflects my strengths well:',
            type: 'mcq',
            options: { A: 'Yes', B: 'Mostly', C: 'Needs improvement', D: 'Poorly' },
          },
          {
            id: 48,
            text: 'I actively build skills through:',
            type: 'mcq',
            options: { A: 'Courses/certifications', B: 'Internships/projects', C: 'Self-learning', D: 'Very little' },
          },
          {
            id: 49,
            text: 'I understand industry expectations for my role:',
            type: 'mcq',
            options: { A: 'Very clearly', B: 'Fairly well', C: 'Somewhat', D: 'Not clear' },
          },
          {
            id: 50,
            text: 'I am confident about interviews/selection processes:',
            type: 'mcq',
            options: { A: 'Very confident', B: 'Confident', C: 'Nervous', D: 'Very nervous' },
          },
          {
            id: 51,
            text: 'My networking efforts are:',
            type: 'mcq',
            options: { A: 'Strong', B: 'Moderate', C: 'Minimal', D: 'None' },
          },
          {
            id: 52,
            text: 'I regularly seek real-world exposure:',
            type: 'mcq',
            options: { A: 'Yes', B: 'Sometimes', C: 'Rarely', D: 'Never' },
          },
        ],
      },
      {
        id: 'G',
        title: 'Module G — Higher Studies vs Job Readiness',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 53,
            text: 'I am academically inclined towards:',
            type: 'mcq',
            options: { A: 'Advanced technical study', B: 'Professional degrees', C: 'Applied/interdisciplinary study', D: 'Research-based study' },
          },
          {
            id: 54,
            text: 'I feel prepared for:',
            type: 'mcq',
            options: { A: 'Immediate employment', B: 'Entry-level roles + learning', C: 'Higher studies', D: 'Still exploring' },
          },
          {
            id: 55,
            text: 'I am willing to prepare for exams like:',
            type: 'mcq',
            options: { A: 'GATE/GRE/GMAT', B: 'CAT/IPMAT', C: 'Design exams', D: 'Research admissions' },
          },
          {
            id: 56,
            text: 'I am open to studying:',
            type: 'mcq',
            options: { A: 'In India', B: 'Abroad', C: 'Both', D: 'Unsure' },
          },
          {
            id: 57,
            text: 'I prefer career paths that:',
            type: 'mcq',
            options: { A: 'Start working early', B: 'Balance study & work', C: 'Study deeply first', D: 'Explore before committing' },
          },
          {
            id: 58,
            text: 'I feel ready for long-term academic commitment:',
            type: 'mcq',
            options: { A: 'Yes', B: 'Mostly', C: 'Unsure', D: 'No' },
          },
        ],
      },
      {
        id: 'H',
        title: 'Module H — Emotional Intelligence & Career Resilience',
        instruction: 'Rate each statement (1 = Not true, 5 = Very true)',
        questions: [
          { id: 59, text: 'I handle career uncertainty calmly', type: 'rating' },
          { id: 60, text: 'I stay motivated despite rejections', type: 'rating' },
          { id: 61, text: 'I accept feedback constructively', type: 'rating' },
          { id: 62, text: 'I manage stress effectively', type: 'rating' },
          { id: 63, text: 'I take responsibility for my career decisions', type: 'rating' },
        ],
      },
      {
        id: 'I',
        title: 'Module I — Career Maturity & Action Readiness',
        instruction: 'Rate each statement (1 = Not true, 5 = Very true)',
        questions: [
          { id: 64, text: 'I have a clear next-step plan', type: 'rating' },
          { id: 65, text: 'I actively work toward my goals', type: 'rating' },
          { id: 66, text: 'I track my progress regularly', type: 'rating' },
          { id: 67, text: 'I seek guidance when needed', type: 'rating' },
          { id: 68, text: 'I feel ready to execute my career plan', type: 'rating' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // TEST 7: Age 23+ | Working Professionals
  // ─────────────────────────────────────────
  'age23plus': {
    title: 'Career Growth & Transition Psychometric Test',
    subtitle: 'Age 23+ | Working Professionals',
    duration: '60-75',
    totalQuestions: 65,
    sections: [
      {
        id: 'A',
        title: 'Module A — Career Satisfaction & Identity',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 1,
            text: 'My current role feels:',
            type: 'mcq',
            options: { A: 'Strongly aligned', B: 'Partially aligned', C: 'Misaligned but manageable', D: 'Completely misaligned' },
          },
          {
            id: 2,
            text: 'At work, I feel most energised when I:',
            type: 'mcq',
            options: { A: 'Solve complex problems', B: 'Lead people/projects', C: 'Create/innovate', D: 'Influence others' },
          },
          {
            id: 3,
            text: 'I currently see myself primarily as:',
            type: 'mcq',
            options: { A: 'Specialist', B: 'Leader', C: 'Innovator', D: 'Strategist' },
          },
          {
            id: 4,
            text: 'My biggest career frustration is:',
            type: 'mcq',
            options: { A: 'Lack of challenge', B: 'Limited growth', C: 'Lack of autonomy', D: 'Value misalignment' },
          },
          {
            id: 5,
            text: 'My work gives me a sense of purpose:',
            type: 'mcq',
            options: { A: 'Strongly', B: 'Moderately', C: 'Occasionally', D: 'Rarely' },
          },
          {
            id: 6,
            text: 'If nothing changes, I see myself in 3 years:',
            type: 'mcq',
            options: { A: 'Growing', B: 'Stable', C: 'Looking for change', D: 'Burnout' },
          },
          {
            id: 7,
            text: 'I feel confident about my career identity:',
            type: 'mcq',
            options: { A: 'Very confident', B: 'Fairly confident', C: 'Unsure', D: 'Confused' },
          },
        ],
      },
      {
        id: 'B',
        title: 'Module B — Core Strengths & Transferable Skills',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 8,
            text: 'My strongest professional skill is:',
            type: 'mcq',
            options: { A: 'Technical', B: 'Execution', C: 'Creativity', D: 'Communication' },
          },
          {
            id: 9,
            text: 'I am often appreciated for:',
            type: 'mcq',
            options: { A: 'Expertise', B: 'Reliability', C: 'Innovation', D: 'Guidance' },
          },
          {
            id: 10,
            text: 'I perform best in roles that require:',
            type: 'mcq',
            options: { A: 'Depth', B: 'Coordination', C: 'Exploration', D: 'Strategy' },
          },
          {
            id: 11,
            text: 'I feel confident transferring my skills:',
            type: 'mcq',
            options: { A: 'Very confident', B: 'Confident', C: 'Unsure', D: 'Not confident' },
          },
          {
            id: 12,
            text: 'I enjoy work that involves:',
            type: 'mcq',
            options: { A: 'Data', B: 'Process', C: 'Ideas', D: 'People' },
          },
          {
            id: 13,
            text: 'I am naturally good at:',
            type: 'mcq',
            options: { A: 'Problem solving', B: 'Managing timelines', C: 'Generating ideas', D: 'Coaching' },
          },
          {
            id: 14,
            text: 'I struggle most with:',
            type: 'mcq',
            options: { A: 'Repetition', B: 'Ambiguity', C: 'Structure', D: 'Conflict' },
          },
          {
            id: 15,
            text: 'My learning style:',
            type: 'mcq',
            options: { A: 'Conceptual', B: 'Practical', C: 'Experiential', D: 'Reflective' },
          },
          {
            id: 16,
            text: 'I feel underutilised:',
            type: 'mcq',
            options: { A: 'Strongly', B: 'Moderately', C: 'Slightly', D: 'Not at all' },
          },
          {
            id: 17,
            text: 'My skills are:',
            type: 'mcq',
            options: { A: 'Advanced', B: 'Competitive', C: 'Developing', D: 'Outdated' },
          },
        ],
      },
      {
        id: 'C',
        title: 'Module C — Leadership & Management Potential',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 18,
            text: 'I enjoy responsibility for:',
            type: 'mcq',
            options: { A: 'Outcomes', B: 'People', C: 'Vision', D: 'Decisions' },
          },
          {
            id: 19,
            text: 'In teams I:',
            type: 'mcq',
            options: { A: 'Provide expertise', B: 'Coordinate', C: 'Inspire', D: 'Resolve conflicts' },
          },
          {
            id: 20,
            text: 'Decision making comfort:',
            type: 'mcq',
            options: { A: 'High', B: 'Moderate', C: 'Low', D: 'Very low' },
          },
          {
            id: 21,
            text: 'Accountability handling:',
            type: 'mcq',
            options: { A: 'Own results', B: 'Delegate', C: 'Iterate', D: 'Reflect' },
          },
          {
            id: 22,
            text: 'Mentoring interest:',
            type: 'mcq',
            options: { A: 'High', B: 'Moderate', C: 'Low', D: 'None' },
          },
          {
            id: 23,
            text: 'Preferred leadership style:',
            type: 'mcq',
            options: { A: 'Technical', B: 'Operational', C: 'Visionary', D: 'Strategic' },
          },
          {
            id: 24,
            text: 'Conflict handling:',
            type: 'mcq',
            options: { A: 'Direct', B: 'Mediate', C: 'Avoid', D: 'Analyse' },
          },
          {
            id: 25,
            text: 'Leadership readiness:',
            type: 'mcq',
            options: { A: 'Ready', B: 'With prep', C: 'Later', D: 'Not interested' },
          },
          {
            id: 26,
            text: 'Feedback on leadership:',
            type: 'mcq',
            options: { A: 'Positive', B: 'Mostly positive', C: 'Mixed', D: 'Rare' },
          },
          {
            id: 27,
            text: 'I see myself managing:',
            type: 'mcq',
            options: { A: 'Projects', B: 'Teams', C: 'Functions', D: 'Organisations' },
          },
        ],
      },
      {
        id: 'D',
        title: 'Module D — Career Pivot & Change Readiness',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 28,
            text: 'I actively think about change:',
            type: 'mcq',
            options: { A: 'Frequently', B: 'Sometimes', C: 'Rarely', D: 'Never' },
          },
          {
            id: 29,
            text: 'Reason for change:',
            type: 'mcq',
            options: { A: 'Growth', B: 'Misfit', C: 'Burnout', D: 'Opportunity' },
          },
          {
            id: 30,
            text: 'Open to:',
            type: 'mcq',
            options: { A: 'Lateral move', B: 'Industry change', C: 'Skill pivot', D: 'Full switch' },
          },
          {
            id: 31,
            text: 'Financial readiness for change:',
            type: 'mcq',
            options: { A: 'High', B: 'Moderate', C: 'Low', D: 'None' },
          },
          {
            id: 32,
            text: 'Risk readiness:',
            type: 'mcq',
            options: { A: 'High', B: 'Moderate', C: 'Low', D: 'Avoid' },
          },
        ],
      },
      {
        id: 'E',
        title: 'Module E — Business & Entrepreneurial Inclination',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 33,
            text: 'My primary interest area:',
            type: 'mcq',
            options: { A: 'Deep expertise', B: 'Operations', C: 'Business building', D: 'Advisory' },
          },
          {
            id: 34,
            text: 'Risk appetite:',
            type: 'mcq',
            options: { A: 'High', B: 'Moderate', C: 'Low', D: 'Very low' },
          },
          {
            id: 35,
            text: 'I have seriously considered:',
            type: 'mcq',
            options: { A: 'Starting a business', B: 'Joining a startup', C: 'Freelancing', D: 'Staying corporate' },
          },
        ],
      },
      {
        id: 'F',
        title: 'Module F — Work Environment & Lifestyle Fit',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 36,
            text: 'Preferred environment:',
            type: 'mcq',
            options: { A: 'Structured', B: 'Corporate', C: 'Flexible', D: 'Independent' },
          },
          {
            id: 37,
            text: 'Work-life priority:',
            type: 'mcq',
            options: { A: 'Growth', B: 'Balance', C: 'Flexibility', D: 'Stability' },
          },
          {
            id: 38,
            text: 'Preferred pace:',
            type: 'mcq',
            options: { A: 'Fast', B: 'Steady', C: 'Flexible', D: 'Deep & slow' },
          },
        ],
      },
      {
        id: 'G',
        title: 'Module G — Learning Agility & Future Skills',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 39,
            text: 'Skill updates:',
            type: 'mcq',
            options: { A: 'Regular', B: 'Occasional', C: 'Rare', D: 'Never' },
          },
          {
            id: 40,
            text: 'Learning adaptability:',
            type: 'mcq',
            options: { A: 'High', B: 'Moderate', C: 'Low', D: 'Resistant' },
          },
        ],
      },
      {
        id: 'H',
        title: 'Module H — Emotional Intelligence',
        instruction: 'Rate each statement (1 = Not true, 5 = Very true)',
        questions: [
          { id: 41, text: 'I handle stress effectively', type: 'rating' },
          { id: 42, text: 'I adapt to change', type: 'rating' },
          { id: 43, text: 'I recover from setbacks', type: 'rating' },
          { id: 44, text: 'I stay motivated', type: 'rating' },
        ],
      },
      {
        id: 'I',
        title: 'Module I — Career Vision & Execution',
        instruction: 'Rate each statement (1 = Not true, 5 = Very true)',
        questions: [
          { id: 45, text: 'I have a clear career vision', type: 'rating' },
          { id: 46, text: 'I know the steps to achieve it', type: 'rating' },
          { id: 47, text: 'I am executing my plan', type: 'rating' },
          { id: 48, text: 'I seek mentorship', type: 'rating' },
          { id: 49, text: 'I feel ready to move forward', type: 'rating' },
        ],
      },
    ],
  },
}

// =============================================
// PHP plugin class-based keys ko age-based keys se map karo
// WooCommerce type=class7-8 bhejta hai → TESTS['age13-14'] use hoga
// =============================================
TESTS['class7-8']           = TESTS['age13-14']
TESTS['class9-10']          = TESTS['age14-15']
TESTS['class11-12-science'] = TESTS['age15-16']
TESTS['class11-12-commerce']= TESTS['age16-17']
TESTS['class11-12-arts']    = TESTS['age17-18']
TESTS['graduate']           = TESTS['age18-22']
TESTS['professional']       = TESTS['age23plus']

// Test type se display name
export const TEST_LABELS = {
  'age13-14': 'Age 13–14 | Class 7–8',
  'age14-15': 'Age 14–15 | Class 9–10',
  'age15-16': 'Age 15–16 | Class 10',
  'age16-17': 'Age 16–17 | Class 11–12',
  'age17-18': 'Age 17–18 | Class 12',
  'age18-22': 'Age 18–22 | College Students',
  'age23plus': 'Age 23+ | Working Professionals',
}

// =============================================
// TERMS & INSTRUCTIONS — Har test ke liye alag
// =============================================
export const TERMS_DATA = {

  // ─────────────────────────────────────────
  // Class 7-8 | Age 13-14
  // ─────────────────────────────────────────
  'class7-8': {
    ageGroup: 'Age Group: 13-14 Years (Class 7-8)',
    stage: 'Early Career Awareness Stage',
    about: 'This psychometric test is designed to help students discover their natural strengths, personality traits, learning style, and interests in a simple and engaging way. It is aligned with the principles of the National Education Policy 2020, focusing on holistic development and early career awareness.',
    purpose: [
      'Understand your personality and behaviour patterns',
      'Identify your natural strengths and abilities',
      'Discover your best learning style',
      'Explore your interests and future inclinations',
      'Build self-awareness and confidence',
    ],
    duration: '25-30 minutes',
    totalQuestions: 36,
    modules: [
      { id: 'A', focus: 'Personality & Behaviour' },
      { id: 'B', focus: 'Strengths & Abilities' },
      { id: 'C', focus: 'Learning Style' },
      { id: 'D', focus: 'Interest Exploration' },
      { id: 'E', focus: 'Self-Awareness & Mindset' },
    ],
    howToAnswer: [
      'Read each question carefully',
      'Choose the option that best describes you',
      'There are no right or wrong answers',
      "Be honest and spontaneous - don't overthink",
      'Select the answer that feels most natural to you',
    ],
    ImportantGuidelines: [
      'Attempt the test in one sitting',
      'Avoid distractions (mobile, TV, conversations)',
      'Do not skip questions',
      'Do not take help from others (parents, friends, internet)',
      'Answer based on your real behaviour, not what you think is correct',
      'Link will be valid for 7 days',
      'Test link cannot be opened multiple times - decide your slot and then attempt',
    ],
    sectionInstructions: [
      { modules: 'Modules A-D (Multiple Choice)', detail: 'Each question has 4 options (A, B, C, D) - Select only one option' },
      { modules: 'Module E (Self-Rating Scale)', detail: '1 = Not true  |  5 = Very true' },
    ],
    afterTest: [
      'A detailed report of your personality, strengths & interests',
      'Insights into learning style and mindset',
      'Early direction for career exploration',
      'Optional 1:1 counselling session for deeper guidance',
    ],
    counsellingLink: 'https://mentorabridge.com/career-counselling-services-chandigarh/',
    forParents: "This assessment provides a scientific foundation to understand your child's natural inclinations, emotional and cognitive strengths, and future academic and career direction.",
    whoShouldTake: [],
    finalNote: '',
  },

  // ─────────────────────────────────────────
  // Class 9-10 | Age 14-15
  // ─────────────────────────────────────────
  'class9-10': {
    ageGroup: 'Age 14-15 | Class 9-10',
    stage: 'Stream Selection Test',
    about: 'This psychometric test is designed to help students make informed stream choices (Science, Commerce, Humanities) by understanding their strengths, interests, personality, and learning preferences. It follows the student-centric approach of the National Education Policy 2020, focusing on exploration rather than pressure-based decisions.',
    purpose: [
      'Identify your academic strengths and inclinations',
      'Understand which stream suits you best',
      'Explore career clusters (not fixed job roles)',
      'Improve decision-making confidence',
      'Reduce confusion, stress, and external pressure',
      'Set clear academic goals for the future',
    ],
    duration: '30-40 minutes',
    totalQuestions: 42,
    DifficultyLevel: 'Moderate(reflective, not academic )',
    Outcome: 'Clarity & awareness (not a final decision',
    modules: [
      { id: 'A', focus: 'Personality & Decision Style' },
      { id: 'B', focus: 'Cognitive Strengths' },
      { id: 'C', focus: 'Academic Subject Suitability' },
      { id: 'D', focus: 'Career Cluster Awareness' },
      { id: 'E', focus: 'Learning Style & Work Preference' },
      { id: 'F', focus: 'Emotional Intelligence' },
    ],
    
    howToAnswer: [
      'Read each question carefully',
      'Choose the option that best reflects you',
      'There are no right or wrong answers',
      'Be honest and spontaneous',
      'Select what is true for you now, not what others expect',
    ],
    ImportantGuidelines: [
      'Attempt the test in one sitting',
      'Link will be valid for 7 days',
      'Test link cannot be opened multiple times - decide your slot and then attempt',
      'Avoid distractions (phone, TV, conversations)',
      'Do not skip questions',
      'Do not seek help from parents or friends',
      'Answer based on your real thoughts and behaviour',
    ],
    sectionInstructions: [
      { modules: 'Modules A-E (Multiple Choice)', detail: 'Each question has 4 options (A, B, C, D) - Select only one option' },
      { modules: 'Module F (Self-Rating Scale)', detail: '1 = Not true  |  5 = Very true' },
    ],
    afterTest: [
      'A detailed psychometric report',
      'Stream suitability analysis (Science / Commerce / Humanities)',
      'Career cluster recommendations',
      'Insights into learning style & emotional readiness',
      'Optional 1:1 counselling session',
    ],

    note: ['You can book your 1:1 counselling session , choose your preferred package'],

    counsellingLink: 'https://mentorabridge.com/career-counselling-services-chandigarh/',
    forParents: "Understand their child's true potential beyond marks, support right stream selection decisions, reduce confusion and stress, and align decisions with long-term career pathways.",
    whoShouldTake: [],
    finalNote: 'This test is not about deciding your future today - it is about understanding yourself better to make smarter choices tomorrow.',
  },

  // ─────────────────────────────────────────
  // Class 11-12 Science | Age 15-16
  // ─────────────────────────────────────────
  'class11-12-science': {
    ageGroup: 'Age 15-16 | Class 10',
    stage: 'Career Direction & Academic Planning Assessment',
    about: 'This is an advanced psychometric assessment designed to help students make clear, confident decisions about their future after Class 10. It aligns with the National Education Policy 2020, focusing on informed choices, flexibility, and self-awareness.',
    purpose: [
      'Confirm stream readiness (Science / Commerce / Humanities / Interdisciplinary)',
      'Identify best-fit career clusters',
      'Understand strengths and improvement areas',
      'Get clarity on subject combinations for Class 11',
      'Build a long-term academic & career roadmap',
      'Reduce confusion, stress, and last-minute decision pressure',
    ],
    duration: '40-50 minutes',
    totalQuestions: 50,
    modules: [
      { id: 'A', focus: 'Personality & Work Orientation' },
      { id: 'B', focus: 'Cognitive & Aptitude Strengths' },
      { id: 'C', focus: 'Academic Subject Suitability' },
      { id: 'D', focus: 'Career Cluster Fitment' },
      { id: 'E', focus: 'Learning Style & Work Environment' },
      { id: 'F', focus: 'Emotional Intelligence & Resilience' },
      { id: 'G', focus: 'Decision Readiness & Goal Clarity' },
    ],
    howToAnswer: [
      'Read each question carefully',
      'Choose the option that best reflects you',
      'There are no right or wrong answers',
      'Do not try to choose ideal answers - choose real answers',
    ],
    guidelines: [
      'Complete the test in one sitting',
      'Link will be valid for 7 days',
      'Test link cannot be opened multiple times',
      'Avoid distractions (mobile, TV, conversations)',
      'Do not skip any questions',
      'Do not take help from parents, friends, or internet',
    ],
    sectionInstructions: [
      { modules: 'Modules A-E (Multiple Choice)', detail: '4 options - select one' },
      { modules: 'Modules F & G (Self-Assessment Scale)', detail: '1 = Not true  |  5 = Very true' },
    ],
    afterTest: [
      'A comprehensive psychometric report',
      'Stream suitability analysis',
      'Career cluster recommendations',
      'Strengths, gaps & improvement insights',
      'Suggested subject combinations for Class 11',
      'Long-term academic planning guidance',
      'Optional 1:1 expert counselling session',
    ],

    note: ['You can book your 1:1 counselling session , choose your preferred package'],

    counsellingLink: 'https://mentorabridge.com/career-counselling-services-chandigarh/',
    forParents: "Make informed stream decisions, understand their child's true potential beyond marks, reduce confusion and pressure, and align decisions with long-term career success.",
    whoShouldTake: [],
    finalNote: 'The goal is not to decide everything today, but to make smarter, clearer, and more confident choices for tomorrow.',
  },

  // ─────────────────────────────────────────
  // Class 11-12 Commerce | Age 16-17
  // ─────────────────────────────────────────
  'class11-12-commerce': {
    ageGroup: 'Age 16-17 | Class 11-12',
    stage: 'Focused Career Development & Degree Mapping Assessment',
    about: 'This is an advanced, high-accuracy psychometric assessment designed to help students in Classes 11-12 make clear, strategic decisions about their degree, career path, and competitive exams.',
    purpose: [
      'Link your current subjects to suitable degree options',
      'Identify best-fit courses (Engineering, Management, Design, Law, etc.)',
      'Evaluate your competitive exam readiness',
      'Build a profile development roadmap (projects, internships, skills)',
      'Avoid random applications and wrong career choices',
      'Create a clear plan from Class 11 to Graduation',
    ],
    duration: '45-60 minutes',
    totalQuestions: 55,
    modules: [
      { id: 'A', focus: 'Personality & Work Identity' },
      { id: 'B', focus: 'Cognitive & Domain Aptitude' },
      { id: 'C', focus: 'Subject-Degree Alignment' },
      { id: 'D', focus: 'Course Cluster Suitability' },
      { id: 'E', focus: 'Competitive Exam Readiness' },
      { id: 'F', focus: 'Learning Style & Work Environment' },
      { id: 'G', focus: 'Emotional Intelligence & Resilience' },
      { id: 'H', focus: 'Career Maturity & Planning Readiness' },
    ],
    howToAnswer: [
      'Read each question carefully',
      'Choose the option that best reflects you',
      'Avoid selecting ideal answers - choose real answers',
    ],
    guidelines: [
      'Complete the test in one sitting',
      'Link will be valid for 7 days',
      'Test link cannot be opened multiple times',
      'Avoid distractions (phone, TV, conversations)',
      'Do not skip questions',
      'Do not take help from parents, friends, or internet',
    ],
    sectionInstructions: [
      { modules: 'Modules A-F (Multiple Choice)', detail: '4 options - select one' },
      { modules: 'Modules G & H (Self-Rating Scale)', detail: '1 = Not true  |  5 = Very true' },
    ],
    afterTest: [
      'A comprehensive career report',
      'Best-fit degree & course recommendations',
      'Career cluster alignment (Engineering / Business / Design / Law etc.)',
      'Strengths, gaps & development insights',
      'Competitive exam suitability analysis (JEE, CUET, CLAT, NID, etc.)',
      'Step-by-step career roadmap (Class 11 to College)',
      'Suggestions for internships, projects & profile building',
      'Optional 1:1 expert counselling session',
    ],

    note: ['You can book your 1:1 counselling session , choose your preferred package'],

    counsellingLink: 'https://mentorabridge.com/career-counselling-services-chandigarh/',
    forParents: "Avoid random or trend-based course selection, understand their child's true direction & readiness, support strategic career planning, and align decisions with long-term success & satisfaction.",
    whoShouldTake: [],
    finalNote: 'The goal is not just choosing a course - but building a clear, confident, and well-planned future path.',
  },

  // ─────────────────────────────────────────
  // Class 11-12 Arts | Age 17-18
  // ─────────────────────────────────────────
  'class11-12-arts': {
    ageGroup: 'Age 17-18 | Class 12',
    stage: 'Degree Finalisation & College Pathway Assessment',
    about: 'This is a high-precision psychometric assessment designed to help students make final, confident decisions about their degree, career path, and college options (India & Study Abroad). It aligns with the progressive vision of the National Education Policy 2020.',
    purpose: [
      'Finalise your degree and course selection',
      'Confirm your best-fit career cluster',
      'Evaluate India vs Study Abroad readiness',
      'Identify your ideal college fit & learning environment',
      'Choose between competitive exams vs holistic admissions',
      'Build a clear 3-5 year academic & career roadmap',
    ],
    duration: '60-70 minutes',
    totalQuestions: 60,
    modules: [
      { id: 'A', focus: 'Career Identity & Motivation' },
      { id: 'B', focus: 'Cognitive & Domain Aptitude' },
      { id: 'C', focus: 'Subject-Degree Fit' },
      { id: 'D', focus: 'Career Cluster Confirmation' },
      { id: 'E', focus: 'Admission Pathway Suitability' },
      { id: 'F', focus: 'India vs Study Abroad Readiness' },
      { id: 'G', focus: 'Learning Environment & College Fit' },
      { id: 'H', focus: 'Emotional Intelligence & Independence' },
      { id: 'I', focus: 'Decision Readiness & Commitment' },
    ],
    howToAnswer: [
      'Read each question carefully',
      'Choose the option that best reflects you',
      'Avoid selecting ideal answers - choose authentic responses',
    ],
    guidelines: [
      'Attempt the test in one sitting',
      'Link will be valid for 7 days',
      'Test link cannot be opened multiple times',
      'Avoid distractions (phone, TV, conversations)',
      'Do not skip questions',
      'Do not take help from parents, friends, or internet',
    ],
    sectionInstructions: [
      { modules: 'Modules A-G (Multiple Choice)', detail: '4 options - select one' },
      { modules: 'Modules H & I (Self-Rating Scale)', detail: '1 = Not true  |  5 = Very true' },
    ],
    afterTest: [
      'A comprehensive career decision report',
      'Final degree & course recommendations',
      'Career cluster confirmation (Engineering / Business / Design / Law etc.)',
      'India vs Study Abroad suitability analysis',
      'Best-fit college type & learning environment insights',
      'Strengths, gaps & readiness evaluation',
      'Admission strategy guidance (exams vs holistic pathways)',
      '3-5 year career & academic roadmap',
      'Optional 1:1 expert counselling session',
    ],

    note: ['You can book your 1:1 counselling session , choose your preferred package'],

    counsellingLink: 'https://mentorabridge.com/career-counselling-services-chandigarh/',
    forParents: "Support final, informed career decisions, avoid misaligned college/course choices, understand child's readiness & independence level, and align investments with long-term success.",
    whoShouldTake: [],
    finalNote: 'The goal is not just choosing a degree - but building a clear, confident, and future-ready pathway.',
  },

  // ─────────────────────────────────────────
  // Graduate | Age 18-22
  // ─────────────────────────────────────────
  'graduate': {
    ageGroup: 'Age 18-22 | College Students',
    stage: 'Career Validation, Pathway Selection & Professional Roadmap Assessment',
    about: 'This is an advanced, strategy-level psychometric assessment designed for college students and young graduates to make clear, confident, and well-informed career decisions.',
    purpose: [
      'Validate your chosen major/specialisation',
      'Identify best-fit career pathways (Job / Startup / Research / Higher Studies)',
      'Assess your industry readiness vs academic inclination',
      'Understand your strengths, gaps & required skills',
      'Decide between Job vs Higher Studies (India/Abroad)',
      'Build a clear 2-5 year career roadmap',
    ],
    duration: '60-75 minutes',
    totalQuestions: 65,
    modules: [
      { id: 'A', focus: 'Career Identity & Motivation' },
      { id: 'B', focus: 'Cognitive & Professional Aptitude' },
      { id: 'C', focus: 'Specialisation Validation' },
      { id: 'D', focus: 'Career Pathway Fit' },
      { id: 'E', focus: 'Work Environment & Role Preference' },
      { id: 'F', focus: 'Industry Readiness & Skills' },
      { id: 'G', focus: 'Higher Studies vs Job Readiness' },
      { id: 'H', focus: 'Emotional Intelligence & Career Resilience' },
      { id: 'I', focus: 'Career Maturity & Action Readiness' },
    ],
    howToAnswer: [
      'Read each question carefully',
      'Choose the option that best reflects you',
      'Avoid selecting ideal answers - choose real ones',
    ],
    guidelines: [
      'Complete the test in one sitting',
      'The test link will remain valid for 7 days only',
      'The test cannot be reopened multiple times - plan your attempt',
      'Avoid distractions (phone, social media, conversations)',
      'Do not skip any questions',
      'Do not take help from others',
    ],
    sectionInstructions: [
      { modules: 'Modules A-G (Multiple Choice)', detail: '4 options - select one' },
      { modules: 'Modules H & I (Self-Rating Scale)', detail: '1 = Not true  |  5 = Very true' },
    ],
    afterTest: [
      'Detailed Career Validation Report',
      'Best-fit Career Pathway Recommendations',
      'Specialisation Alignment Analysis',
      'Strengths, Gaps & Skill Development Plan',
      'Suggested Internships & Job Roles',
      'Higher Studies vs Job Readiness Insights',
      'India vs Study Abroad Direction (if applicable)',
      '2-5 Year Career Roadmap with Action Steps',
    ],

    note: ['You can book your 1:1 counselling session , choose your preferred package'],

    counsellingLink: 'https://mentorabridge.com/career-counselling-services-chandigarh/',
    forParents: "Understand their child's career direction & readiness, support decisions beyond traditional degree thinking, avoid misaligned investments in courses or higher studies, and enable structured and strategic career planning.",
    whoShouldTake: [],
    finalNote: 'This assessment is not just about choosing a career - it is about building a clear, confident, and actionable future.',
  },

  // ─────────────────────────────────────────
  // Professional | Age 23+
  // ─────────────────────────────────────────
  'professional': {
    ageGroup: 'Age 23+ | Working Professionals',
    stage: 'Career Change, Leadership & Business Pathway Assessment',
    about: 'This is an advanced, strategy-level psychometric assessment designed for working professionals to evaluate their current career position, future growth opportunities, and transition readiness. Ideal for individuals looking to grow in their current career, shift roles or industries, move into leadership positions, or explore entrepreneurship or consulting.',
    purpose: [
      'Validate your current career fit',
      'Identify your next growth direction (Specialist / Leader / Entrepreneur / Pivot)',
      'Assess your career change readiness',
      'Understand your leadership & business potential',
      'Explore suitable roles, industries, or ventures',
      'Build a 2-5 year career & income growth roadmap',
    ],
    duration: '60-75 minutes',
    totalQuestions: 65,
    modules: [
      { id: 'A', focus: 'Career Satisfaction & Identity' },
      { id: 'B', focus: 'Core Strengths & Transferable Skills' },
      { id: 'C', focus: 'Leadership & Management Potential' },
      { id: 'D', focus: 'Career Pivot & Change Readiness' },
      { id: 'E', focus: 'Business & Entrepreneurial Inclination' },
      { id: 'F', focus: 'Work Environment & Lifestyle Fit' },
      { id: 'G', focus: 'Learning Agility & Future Skills' },
      { id: 'H', focus: 'Emotional Intelligence & Resilience' },
      { id: 'I', focus: 'Career Vision & Execution Readiness' },
    ],
    howToAnswer: [
      'Read each question carefully',
      'Choose the option that best reflects you',
      'Avoid choosing ideal answers - choose real ones',
    ],
    guidelines: [
      'Complete the test in one sitting',
      'The test link will remain valid for 7 days only',
      'The test cannot be reopened multiple times',
      'Attempt the test when you can give full focus',
      'Avoid distractions (calls, emails, social media)',
      'Do not skip any questions',
      'Do not take help from others',
    ],
    sectionInstructions: [
      { modules: 'Modules A-G (Multiple Choice)', detail: '4 options - select one' },
      { modules: 'Modules H & I (Self-Rating Scale)', detail: '1 = Not true  |  5 = Very true' },
    ],
    afterTest: [
      'Career Growth Direction (Specialist / Leadership / Business / Transition)',
      'Career Pivot & Role Change Recommendations',
      'Leadership & Entrepreneurial Potential Analysis',
      'Strengths, Gaps & Skill Upgrade Plan',
      'Industry & Role Alignment Insights',
      'Income Growth Strategy Direction',
      'Higher Studies / Executive Education Guidance (if applicable)',
      '2-5 Year Career Roadmap with Action Steps',
    ],

    note: ['You can book your 1:1 counselling session , choose your preferred package'],

    counsellingLink: 'https://mentorabridge.com/career-counselling-services-chandigarh/',
    forParents: '',
    whoShouldTake: [
      'Mid-career professionals',
      'Individuals planning a career switch',
      'Professionals aiming for leadership roles',
      'Aspiring entrepreneurs or consultants',
      'Anyone feeling stuck, misaligned, or underutilised in their career',
    ],
    finalNote: 'This is not just about changing jobs - it is about designing your next level of career, income, and life direction.',
  },
}
