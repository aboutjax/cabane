import type {
  SerializedEditorState,
  SerializedLexicalNode,
} from '@payloadcms/richtext-lexical/lexical'

type NodeWithChildren = SerializedLexicalNode & { children?: SerializedLexicalNode[] }

export const isLexicalEmpty = (data?: SerializedEditorState | null): boolean => {
  const children = data?.root?.children as NodeWithChildren[] | undefined
  if (!children?.length) return true
  return children.every(
    (node) => node.type === 'paragraph' && (node.children?.length ?? 0) === 0,
  )
}

export const isEmptyArray = <T>(arr?: T[] | null): boolean => !arr || arr.length === 0
