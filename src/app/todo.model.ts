export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  isEditing?: boolean; // 👈 used for edit mode
}
