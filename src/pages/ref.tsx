import React from 'react'
import { Headings } from '@/components/Headings'
import { Paragraphs } from '@/components/Paragraphs'
import { OrderedList, UnorderedList, DescriptionList } from '@/components/Lists'
import { Tables } from '@/components/Tables'
import { Linkings } from '@/components/Linkings'
import { Imgs } from '@/components/Imgs'

export default function Refs(): JSX.Element {
  return (
    <div className='flex gap-5 container'>
        <Headings />
        <Paragraphs />        
        <OrderedList />
        <UnorderedList />
        <DescriptionList />
        <Tables />
        <Linkings />
        <Imgs />
    </div>
  )
}