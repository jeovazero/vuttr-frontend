/** @flow */
/** @jsx jsx */
import { useState } from 'react'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import { DialogBox, P, Input, Textarea } from '../../index'

type Tool = {
  title: string,
  link: string,
  description: string,
  tags: string
}

type Props = {
  /** onClose handler */
  onClose?: () => mixed,
  /** onConfirm handler */
  onConfirm: (tool: Tool) => mixed,
  /** isOpen flag */
  isOpen: boolean,
  className?: string
}

const StyledAddToolBox = styled(DialogBox)`
  .vuttr__addtool__attr {
    padding: 0.5rem 0;

    .vuttr__addtool__attr__title {
      padding: 0 0 0.5rem;
    }
  }

  .vuttr__addtool__attr > div > textarea {
    font-weight: normal;
  }

  .vuttr__addtool__attr:first-child {
    padding: 0;
  }
`

/** AddToolDialogBox component */
const AddToolDialogBox = (props: Props) => {
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState('')

  const { isOpen, onClose, onConfirm, className } = props

  const addTool = callback => {
    const tool = {
      title,
      link,
      description,
      tags
    }
    callback(tool)
  }

  if (!isOpen) return null

  return (
    <StyledAddToolBox
      isOpen={isOpen}
      title='Add new tool'
      titleIcon='plus'
      confirmText='Add tool'
      onConfirm={() => addTool(onConfirm)}
      onClose={onClose}
      isBlock
      className={className}
    >
      <div>
        <div className='vuttr__addtool__attr'>
          <div className='vuttr__addtool__attr__title'>
            <P>Tool Name</P>
          </div>
          <Input onChange={setTitle} value={title} isFlex />
        </div>
        <div className='vuttr__addtool__attr'>
          <div className='vuttr__addtool__attr__title'>
            <P>Tool Link</P>
          </div>
          <Input onChange={setLink} value={link} isFlex />
        </div>
        <div className='vuttr__addtool__attr'>
          <div className='vuttr__addtool__attr__title'>
            <P>Tool Description</P>
          </div>
          <Textarea onChange={setDescription} value={description} />
        </div>
        <div className='vuttr__addtool__attr'>
          <div className='vuttr__addtool__attr__title'>
            <P>Tags</P>
          </div>
          <Input onChange={setTags} value={tags} isFlex />
        </div>
      </div>
    </StyledAddToolBox>
  )
}

AddToolDialogBox.defaultProps = { isOpen: false }

export default AddToolDialogBox
