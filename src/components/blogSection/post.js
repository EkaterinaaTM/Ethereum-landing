import React from 'react';

import Button from '../Button/Button';

const Post = ({ img, title, date, link }) => (
  <div className='blog_item text-block--justify'> 
    <img src={img} className='blog_img'/>
    <h4 className='title_h4' dangerouslySetInnerHTML={{ __html: title }}/>
    <p>{date}</p>
    <a href={link} target='_blank'><Button text='Read More' className='button--lg--transparent'/></a>
  </div>
);

export default Post;