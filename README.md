# frontend-components

A collection of frontend components for use in all React frontend projects.

## Install

The package is published privately under **chassis-app** organization. To use it in another project of **chassis-app** , we first need to follow this steps:

1. Create `.npmrc` file:

    - Open a `.npmrc` file to the root folder (where `package.json` file exists)
    - Copy and paste this line `@chassis-app:registry=https://npm.pkg.github.com`

2. Create an auth token:

    You need a Personal access token from GitHub to be used as password on command line. It can be generated from **Settings > Developer settings > Personal access tokens** with correct permissions (at least read:packages, write:packages and repo, delete:packages optional).

3. Login to npm:

    Run `npm login --registry=https://npm.pkg.github.com` and follow the prompt. (Note that `yarn` login doesn’t support specifying registry). Use the token as your password.

For more info, refer to the _Log in to GitHub, then publish your package (I swear)_ section of [this article.](https://medium.com/better-programming/build-your-very-own-react-component-library-and-publish-it-to-github-package-registry-192a688a51fd)

Now run

    yarn add @chassis-app/frontend-components

## Example

```jsx
// page-test.js
import React from 'react'
import Layout from 'components/layout'
import {LangSelectButton, SubmitButton} from '@chassis-app/frontend-components'
import {ThemeProvider} from 'styled-components'
import {theme} from '../const/theme'

const App = () => {
    return (
        <Layout>
            <h2 style={{margin: 25}}> Test Page</h2>

            <ThemeProvider theme={theme}>
                <LangSelectButton selected={true}>English</LangSelectButton>
                <SubmitButton text={'Submit'} disabled={false} />
            </ThemeProvider>
        </Layout>
    )
}
export default App
```

## Available components and their props

### Component props

**`Autocomplete`**

| Property         | Type     | Required | Default value                      | Note                       |
| :--------------- | :------- | :------- | :--------------------------------- | :------------------------- |
| `data`           | array    | required | []                                 | Suggestion data            |
| `dataDescriptor` | object   | optional | {id: 'value', field: 'searchText'} | Used in Flexsearch         |
| `value`          | object   | required | nonFormikValue                     | Selected value(s)          |
| `onSelect`       | function | required | null                               | On suggestion select event |
| `itemDisplay`    | function | optional | () => 'missing display'            | Item to show at onSelect   |
| `multiple`       | boolean  | optional | false                              | Enable multiple selection  |
| `placeholder`    | string   | optional |                                    | Input placeholder          |
| `field`          | object   | optional | {value: null, name: null}          |                            |
| `form`           | object   | optional | {setFieldValue: null}              |                            |

**`LangSelectButton`**

| Property   | Type    | Required | Default value | Note                    |
| :--------- | :------ | :------- | :------------ | :---------------------- |
| `selected` | boolean | optional |               | To denote clicked state |

**`SubmitButton`**

| Property     | Type     | Required | Default value | Note                                          |
| :----------- | :------- | :------- | :------------ | :-------------------------------------------- |
| `text`       | string   | required |               | Display text                                  |
| `height`     | number   | optional | `40`          | Height of the button                          |
| `width`      | number   | optional | `300`         | Width of the button                           |
| `disabled`   | boolean  | optional | false         | To disable the button                         |
| `onSubmit`   | function | optional | `() => {}`    | Click event                                   |
| `isLoading`  | boolean  | optional | false         | Display processing, after click on the button |

**`DataTable`**

| Property                   | Type     | Required | Default value | Note                    |
| :--------------------------| :------- | :------- | :------------ | :---------------------- |
| `data`                     |          | required |               | Table data              |
| `loading`                  | boolean  | required |               | Data loading state      |
| `totalCount`               | number   | required |               | Row count               |
| `columns`                  | array    | required |               | Table column details    |
| `wrapper`                  | object   | optional | {}            | Wrapper components      |
| `height`                   | number   | required |               | Table height            |
| `headerStyle`              | object   | optional | {}            | Header style properties |
| `headerClass`              | string   | optional | ''            | Header class name       |
| `sortIconSize`             | string   | required |               | Header sort icon size   |
| `view`                     | string   | optional | 'ROW'         | Table view option       |
| `showToggleButtons`        | boolean  | optional | true          |                         |
| `showTotalRecords`         | boolean  | optional | true          |                         |
| `showGlobalSearch`         | boolean  | optional | true          |                         |
| `showTableHeader`          | boolean  | optional | true          |                         |
| `gridCellMinWidth`         | number   | required | null          |                         |
| `gridCellMaxWidth`         | number   | optional | 250           |                         |
| `selectable`               | boolean  | optional | false         | If row can be select    |
| `onSelect`                 | function | optional | () => {}      | On row select event     |
| `recordTotalComponent`     |          | optional | null          |                         |
| `globalSearchBarComponent` |          | optional | null          |                         |
| `isHeader`                 | boolean  | optional | false         |                         |

**`DateTimePicker`**

| Property       | Type     | Required | Default value     | Note              |
| :------------- | :------- | :------- | :---------------- | :---------------- |
| `showTimeSlot` | boolean  | optional | false             |                   |
| `hidden`       | boolean  | optional | false             | To hide component |
| `date`         | date     | optional | moment().toDate() | Selected date     |
| `label`        | string   | optional | null              |                   |
| `changeDate`   | function | optional | () => {}          | Date click event  |

**`FileUploadDropZone`**

| Property         | Type      | Required | Default value | Note                                  |
| :--------------- | :------   | :------- | :------------ | :-----------------------------------  |
| `uploadUrl`      | string    | required | null          | Url to upload files                   |
| `fieldName`      | string    | optional | pic           |                                       |
| `sendOnDrop`     | boolean   | optional | false         | Start uploading on file drop          |
| `acceptFileType` | string    | optional | null          | Supported file types user can select  |
| `width`          | string    | optional | '150px'       |                                       | 
| `height`         | string    | optional | '150px'       |                                       |
| `multiple`       | boolean   | optional | true          | Multiple file upload state            |
| `jwt`            | string    | optional | null          | Token to upload file                  |
| `onUploadFinish` | function  | optional | () => {}      | Result of upload API call             |
| `requiredInfo`   | object    | optional | {}            | can pass additional params to backend |  

**`Title`, `FormikForm`, `BasicInput`, `FastFieldInput`, `InputErrorMessage`, `NavbarIcon`**

    None

**`Checkbox`**

| Property | Type   | Required | Default value | Note                   |
| :------- | :----- | :------- | :------------ | :--------------------- |
| `form`   | object | optional |               | To use with FormikForm |
| `field`  | object | optional |               | To use with FormikForm |

**`Gallery`**

| Property        | Type      | Required | Default value | Note               |
| :-------------  | :-------- | :------- | :------------ | :----------------- |
| `data`          | array     | required |               | Gallery data       |
| `width`         | number    | optional | 110           |                    |
| `height`        | number    | optional | 110           |                    |
| `onRemoveClick` | function  | optional | () => {}      | remove click event |


**`Navbar`**

| Property           | Type      | Required | Default value                      | Note                                      |
| :----------------- | :-------- | :------- | :--------------------------------- | :---------------------------------------  |
| `isLoggedIn`       | boolean   | optional | false                              |
| `userName`         | string    | optional | ''                                 |
| `onLogin`          | function  | optional | () => {}                           | Login click event                         |
| `onLogout`         | function  | optional | () => {}                           | Logout click event                        |
| `onLogoClick`      | function  | optional | () => {}                           | Logo click event                          |
| `routes`           | object    | required |                                    | Dropdown menu routes                      |
| `RouterLink`       | component | required | `props => <a>{props.children}</a>` | React component (that includes `<Link/>`) |
| `icons`            | array     | required | []                                 | Array of icon components                  |
| `highPriorityIcons`| array     | optional | []                                 | Array of icon components                  |

**`RadioButton`**

| Property   | Type     | Required | Default value | Note                     |
| :--------- | :------- | :------- | :------------ | :----------------------- |
| `options`  | array    | required |               | Available button options |
| `value`    |          | optional | null          | Preselected value(s)     |
| `onUpdate` | function | optional | () => {}      | Button click event       |
| `form`     | object   | optional |               | To use with FormikForm   |
| `field`    | object   | optional |               | To use with FormikForm   |

**`ReactDatePicker`**

| Property       | Type     | Required | Default value | Note              |
| :------------- | :------- | :------- | :------------ | :---------------- |
| `showTimeSlot` | boolean  | optional | true          |                   |
| `hidden`       | boolean  | optional | false         | To hide component |
| `date`         | date     | optional | newDate()     | Selected date     |
| `label`        | string   | optional | 'time'        |                   |
| `changeDate`   | function | optional | () => {}      | Date click event  |

_Note: Add css: `import 'react-datepicker/dist/react-datepicker.css'`_

**`DefaultNavbarIcon`**

Available icon components:

-   `LangSelectorButton`

| Property | Type   | Required | Default value    | Note                                  |
| :------- | :----- | :------- | :--------------- | :------------------------------------ |
| `i18n`   | object | required | {language: 'en'} | react i18 next language configuration |

### Theme props

These props should be passed by `theme` prop with `ThemeProvider`.

All the fields are required and `string` of type here.

**`Autocomplete`**

```
    autoComplete: {
        background: color code,
        backgroundHover: color code,

        borderColorFocus: .color code,
        borderColorNotFocus: color code,
        shadow: color code array,

        borderRadius: in rem,
        borderWidth: in px,

        fontSize: in rem,

        chipBorderRadius: in rem,
        chipBackground: color code,
        chipColor: color code,
    }
```

**`LangSelectButton`, `SubmitButton`**

```
    buttonComponents: {
        primaryColor: color code,
        secondaryColor: color code,
        backgroundSelected: color code,
        backgroundNotSelected: color code,

        fontSize: in rem,

        borderWidth: in px,
        borderRadiusLangSelect: in rem,
        borderRadiusSubmit: in rem,

        timeTransition: in time,
    }
```

**`Title`, `FormikForm`, `BasicInput`, `FastFieldInput`, `InputErrorMessage`, `Checkbox`**

```
    formikComponents: {
        titleColor: color code
        titleWeight: in number,
        titleSize: in rem,

        background: color code,

        borderColorFocus: color code,
        borderColorNotFocus: color code,

        shadowNotFocus: color code,
        shadowFocus: color code,

        fontSize: in rem,

        borderWidth: in px,
        borderRadius: in rem,

        errorColor: color code,
        errorFontSize: in rem,

        checkedBackgroundColor: color code,
        uncheckedBackgroundColor: color code,
    }
```

**`DataTable`**

```
    dataTable: {
        headerColor: color code,

        background: color code,
        searchBackground: color code,
        shadowColor: color code,

        evenRow: color code,
        oddRow: color code,

        toggleEnabledColor: color code,
        toggleDisabledColor: color code,

        loaderPrimaryColor: color code,
        loaderSecondaryColor: color code,

        fontSize: in rem,
        fontWeight: in number,

        fontSizeIcon: in rem,

        borderWidth: in px,
        borderRadius: in rem,
        borderColor: color code,

        shadowFocus: color code,
        borderColorFocus: color code,
    }
```

**`FileUploadDropZone`**

```
    fileUploadDropZone: {
        primaryColor: color code,
        background: color code,

        fontSize: in rem,
        fontSizeIcon: in rem,

        borderRadius: in rem,

        borderWidth: in px,
        borderWidthDropDiv: in rem,

        overlayBackground: color code,
        overlayColor: color code,
        overlayFontSize: in rem,
    }
```

**`Gallery`**

```
    gallery: {
        primaryColor: color code,
        buttonHover: color code,

        fontSize: in rem,
        fontSizeIcon: in rem,

        borderRadius: in rem,
        borderWidth: in px,

        timeTransition: in time,
    }
```

**`Navbar`**

```
    navbar: {
        background: color code,
        backgroundSearchField: color code,

        color: color code,
        userNameColor: color code,

        fontSize: in rem,
        fontWeight: in number,

        borderRadius: in rem,
        borderWidth: in px,

        mobileMenuColor: color code,
        mobileMenuFontSize: in rem,
        mobileMenuBorderBottom: color code,

        autosuggestColor: color code,
        autosuggestBackground: color code,
        autosuggestHoverBackground: color code,
        autosuggestFontSize: in rem,

        activeHamburgerColor: color code,
    }
```

**`RadioButton`**

```
    radioButton: {
        borderColor: color code,
        backgroundSelected: color code,
        backgroundNotSelected: color code,

        fontSize: in rem,

        borderRadius: in rem,
        borderWidth: in px,
    }
```

## How to use locally

Clone this repo to your local computer, then run:

-   `yarn install`
-   `yarn build`

-   To make this component available to other projects on your local computer, run `yarn link`.
-   Then go to the project where you want to use this package and run `yarn link "@chassis-app/frontend-components"`. (If we want to use this package in `chassis3-gatsby` project, navigate to the `chassis3-gatsby` folder and run this command)

Finally, to fix the multiple copies of React bug that shows up with linked React packages:

-   navigate to the root of the `frontend-components` package
-   run `npm link "../path/to/your/project"`

(Make sure to use `npm` command here)

Like if `chassis-gatsby` and `frontend-components` are in them same folder. Navigate to `frontend-components` folder and run:

-   `npm link ../chassis3-gatsby/node_modules/react`
-   `npm link ../chassis3-gatsby/node_modules/formik`
-   `npm link ../chassis3-gatsby/node_modules/styled-components`

If not working though, try [this solution.](https://github.com/styled-components/styled-components/issues/2379#issuecomment-588002942)

_Note: If you run `yarn install x_package` or`yarn remove x_package`, you may need to run the `npm link` commands again. Because install and remove commands change the package source._

Now we can import `@chassis-app/frontend-components` as a normal package installed from yarn like so:

```
import {SubmitButton} from '@chassis-app/frontend-components'
...
```
