import List from '../images/list.svg'
import Report from '../images/report.svg'

/**
 * path: optional.  Gen with a <Link> if path is provided, otherwise it's a text and cannot be clicked
 * icon: optional.  If not provided will generate with a random icon
 * menuName: The words showing on navbar
 * itemId: an ID defining the sequence of showing in menu
 * showBeforeLogin: whether this item will show before login
 * showAfterLogin: whether this will show after login
 * parentId: optional.  Without parentId will be shown at first level.  Having parentId means it's a child.  Shouldn't point to another child otherwise it won't show
 */

export const routes = [
    {
        path: '/',
        menuName: 'Home',
        icon: Report,
        showBeforeLogin: true,
        showAfterLogin: false,
        itemId: 1,
    },
    {
        menuName: 'Dashboard',
        icon: Report,
        showBeforeLogin: false,
        showAfterLogin: true,
        itemId: 11,
    },
    {
        path: '/dashboard/personal',
        menuName: 'Personal Dashboard',
        showBeforeLogin: false,
        showAfterLogin: true,
        icon: Report,
        itemId: 12,
        parentId: 11,
    },
    {
        path: '/structure/',
        menuName: 'Sitemap?',
        icon: List,
        showBeforeLogin: false,
        showAfterLogin: true,
        itemId: 998,
    },
    {
        path: '/page-test/',
        menuName: 'Test',
        showBeforeLogin: true,
        showAfterLogin: true,
        icon: List,
        itemId: 999,
    },
    {
        menuName: 'Product Master',
        showBeforeLogin: false,
        showAfterLogin: true,
        icon: List,
        itemId: 101,
    },
    {
        path: '/ProductMaster/list1',
        menuName: 'List Products 11111111111',
        showBeforeLogin: false,
        showAfterLogin: true,
        icon: List,
        itemId: 102,
        parentId: 101,
    },
    {
        path: '/ProductMaster/list2',
        menuName: 'List Products 2',
        showBeforeLogin: false,
        showAfterLogin: true,
        icon: List,
        itemId: 103,
        parentId: 101,
    },
    {
        path: '/ProductMaster/list3',
        menuName: 'List Products 3',
        showBeforeLogin: false,
        showAfterLogin: true,
        icon: List,
        itemId: 104,
        parentId: 101,
    },
    {
        path: '/ProductMaster/list4',
        menuName: 'List Products 4',
        showBeforeLogin: false,
        showAfterLogin: true,
        icon: List,
        itemId: 105,
        parentId: 101,
    },
    {
        path: '/ProductMaster/list5',
        menuName: 'List Products 5',
        showBeforeLogin: false,
        showAfterLogin: true,
        icon: List,
        itemId: 106,
        parentId: 101,
    },
    {
        menuName: 'Party Master',
        showBeforeLogin: false,
        showAfterLogin: true,
        icon: List,
        itemId: 201,
    },
    {
        path: '/PartyMaster/addMeeting',
        menuName: 'Add Customer Meeting',
        showBeforeLogin: false,
        showAfterLogin: true,
        icon: List,
        itemId: 202,
        parentId: 201,
    },
]
