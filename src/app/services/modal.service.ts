import { Injectable } from '@angular/core';


interface IModal{
  id: string,
  visibility: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modals: IModal[] = []

  constructor() { }

  register(id: string){
    this.modals.push({
      id,
      visibility: false
    })
  }

  unregister(id: string){
    this.modals = this.modals.filter((modal: IModal)=>modal.id !== id)
  }

  getModalVisbility(id: string):boolean{
    return !!this.modals.find((modal: IModal)=>modal.id===id)?.visibility
  }

  toggleModalVisibility(id: string){
    const modal = this.modals.find((modal:IModal)=>modal.id===id)
    if(modal){
      modal.visibility = !modal.visibility
    }
  }

}
