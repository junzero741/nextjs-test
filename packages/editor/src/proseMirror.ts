import {schema} from "prosemirror-schema-basic"
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"

export function setUpEditor () {
  let state = EditorState.create({schema})
  let view = new EditorView(document.querySelector<HTMLDivElement>('#app')!, {state})
}

