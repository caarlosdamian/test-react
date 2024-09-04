import { SelectOptionsI } from "../types";

export const priorityOptions: SelectOptionsI[] = [
  {
    id: '1',
    name: 'Low',
    value: 'low',
  },
  {
    id: '2',
    name: 'Medium',
    value: 'medium',
  },
  {
    id: '3',
    name: 'High',
    value: 'high',
  },
];


export const statusOptions: SelectOptionsI[] = [
  {
    id: '1',
    name: 'Pending',
    value: 'pending',
  },
  {
    id: '2',
    name: 'Completed',
    value: 'completed',
  },
];



export const tasks: { uid: string; name: string; priority: string; state: string; duedate: string }[] = [
  {
    uid: '1',
    name: 'Complete Project Report',
    priority: 'high',
    state: 'pending',
    duedate: '2024-09-10',
  },
  {
    uid: '2',
    name: 'Schedule Team Meeting',
    priority: 'medium',
    state: 'completed',
    duedate: '2024-09-05',
  },
  {
    uid: '3',
    name: 'Update Website Content',
    priority: 'low',
    state: 'pending',
    duedate: '2024-09-15',
  },
  {
    uid: '4',
    name: 'Prepare Presentation Slides',
    priority: 'high',
    state: 'completed',
    duedate: '2024-09-07',
  },
  {
    uid: '5',
    name: 'Client Feedback Review',
    priority: 'medium',
    state: 'pending',
    duedate: '2024-09-12',
  },
];