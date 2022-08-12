'use babel';

import SlotGacorGampangMenangView from './slot-gacor-gampang-menang-view';
import { CompositeDisposable } from 'atom';

export default {

  slotGacorGampangMenangView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.slotGacorGampangMenangView = new SlotGacorGampangMenangView(state.slotGacorGampangMenangViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.slotGacorGampangMenangView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'slot-gacor-gampang-menang:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.slotGacorGampangMenangView.destroy();
  },

  serialize() {
    return {
      slotGacorGampangMenangViewState: this.slotGacorGampangMenangView.serialize()
    };
  },

  toggle() {
    console.log('SlotGacorGampangMenang was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
