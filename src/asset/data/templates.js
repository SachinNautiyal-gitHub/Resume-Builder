

import template1 from '../../images/template1.jpg'
import template2 from '../../images/template2.jpg'
import template3 from '../../images/template3.jpg'
import template4 from '../../images/template4.jpg'

import Template1 from '../templates/template1/Template1'
import Template2 from '../templates/template2/Template2'
import Template3 from '../templates/template3/Template3'
import Template4 from '../templates/template4/Template4'


export const templates = [
    {
        id: 1,
        template_name: "Template-1",
        template_img: template1,
        template: <Template1/>,
    },
    {
        id: 2,
        template_name: "Template-2",
        template_img: template2,
        template: <Template2/>,
    },

    {
        id: 3,
        template_name: "Template-3",
        template_img: template3,
        template: <Template3/>,
    },

    {
        id: 4,
        template_name: "Template-4",
        template_img: template4,
        template: <Template4/>,
    }
];