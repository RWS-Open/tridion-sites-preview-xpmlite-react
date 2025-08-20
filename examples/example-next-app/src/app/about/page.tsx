'use client';
import React from 'react';
import { HeadlessXpmEditor, HeadlessXpmProvider } from "headless-xpm-react"
const page = () => {
  return (
    <HeadlessXpmProvider editorUrl="test" showExpSpaceEditor={true} staging={true} showPageEditorLink={true}>
      <HeadlessXpmEditor tcmId=''>
        <div>About</div>
      </HeadlessXpmEditor>
    </HeadlessXpmProvider>
  )
}

export default page