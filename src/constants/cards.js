export const COLUMNS = {
  newTask: 'New Task',
  scheduled: 'Scheduled',
  inProgress: 'In progress',
  completed: 'Completed',
  createStatus: '+ Create Status',
};

export const defaultTasks = [
  { id: 1, title: 'Check email', duration: '0:20h', status: COLUMNS.newTask },
  { id: 2, title: 'Compare PPC agencies and make a report for Steven', duration: '3:00h', status: COLUMNS.newTask },
  { id: 3, title: 'Meeting with Amanda (PR department)', duration: '0:30h', status: COLUMNS.newTask },
  { id: 4, title: "Get Patrick's approval for homepage new design", duration: '0:20h', status: COLUMNS.newTask },
  { id: 5, title: 'Check email', duration: '0:20h', status: COLUMNS.scheduled },
  {
    id: 6,
    title: 'Write a blogpost "7 best strategies for SEO in 2020"',
    duration: '5:00h',
    status: COLUMNS.scheduled,
  },
  { id: 7, title: 'New Ad copies for Manamaja', duration: '2:00h', status: COLUMNS.scheduled },
  { id: 8, title: 'Check email', duration: '0:20h', status: COLUMNS.inProgress },
  {
    id: 9,
    title: "Record a video comment about last week's analytics report",
    duration: '0:20h',
    status: COLUMNS.inProgress,
  },
  { id: 10, title: 'Process all resumes for Content Marketer position', duration: '1:00h', status: COLUMNS.inProgress },
  { id: 11, title: 'Check email', duration: '0:20h', status: COLUMNS.completed },
  { id: 12, title: 'Weekly planning session', duration: '0:45h', status: COLUMNS.completed },
  {
    id: 13,
    title: 'Create 5+ target audiences in Facebook for Samsung SamsungSamsung',
    duration: '2:30h',
    status: COLUMNS.completed,
  },
  { id: 14, title: 'Check FB Banner Design and give feedback', duration: '0:20h', status: COLUMNS.completed },
  { id: 15, title: 'Check email', duration: '0:20h', status: COLUMNS.completed },
];
