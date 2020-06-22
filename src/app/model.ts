export class toDoList {
    id: string;
    title: string;
    content: string;
    frontend: number;
    backend: number;
    issue: number;
    important: number;
    stared: number;
    done: number
  }
export class toDoListWithIcons extends toDoList {
    important_icon:string;
    stared_icon:string;
    done_icon:string;
    constructor() {
        super();
        this.important_icon = 'error_outline';
        this.stared_icon = 'star_border';
        this.done_icon = 'crop_square'
    } 
}
export interface chatList {
    id: number,
    name: string,
    online: number,
    unread: number,
    avatar: string,
    chat:  string[]
} 
export interface filterTags {
    name:string,
    tag: string,
    iconName: string
}
export interface labelTags {
    name: string,
    iconColor: string,
    iconName: string
}