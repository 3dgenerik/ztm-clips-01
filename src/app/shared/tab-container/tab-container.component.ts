import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrl: './tab-container.component.css'
})
export class TabContainerComponent implements AfterContentInit{
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList();

  ngAfterContentInit(): void {
    const activeTabs = this.tabs.filter((tab: TabComponent)=>tab.active)
    if(!activeTabs || activeTabs.length===0)
      this.activateTab(this.tabs.first)
  }

  activateTab(tab: TabComponent){
    for (const tab of this.tabs) {
      tab.active = false;
    }
    tab.active = true;
  }

  changeTab(event: Event, tab: TabComponent){
    event.preventDefault()
    this.activateTab(tab)
  }


}
