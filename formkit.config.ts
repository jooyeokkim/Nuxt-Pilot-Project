import { generateClasses } from '@formkit/themes'
import { defaultConfig } from '@formkit/vue'

const textClassification = {
  label:
    'ml-1 mb-1 text-base md:text-xl formkit-errors:text-red-500 formkit-invalid:text-red-500',
  outer: 'w-full',
  inner:
    'relative hover:bg-gradient-to-r focus-within:bg-gradient-to-r focus from-grad-start-200 to-grad-end-200 rounded-lg p-0.5',
  input:
    'formkit-errors:border-red-500 formkit-invalid:border-red-500 relative block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-left text-base text-gray-700 shadow-sm focus:outline-none hover:border-transparent focus:border-transparent md:px-6 md:text-lg placeholder-gray-500'
}

const buttonClassification = {
  outer: 'z-50',
  wrapper:
    'group inline-block gradient-200 rounded p-0.5 text-white text-base md:text-lg font-bold cursor-pointer hover:text-grad-start-200 transition-all duration-300 text-center',
  input: 'bg-transparent rounded-sm px-4 md:px-7 py-2 group-hover:bg-white'
}

const theme = {
  global: {
    help: 'text-base text-red-500',
    messages: 'text-red-500 list-none mt-1 ml-2'
  },
  button: buttonClassification,
  color: {
    label: 'block mb-1 font-bold text-sm',
    input:
      'w-16 h-8 appearance-none cursor-pointer border border-gray-300 rounded-md mb-2 p-1'
  },
  mask: textClassification,
  date: textClassification,
  'datetime-local': textClassification,
  checkbox: {
    wrapper: 'flex items-center gap-2',
    fieldset: 'flex w-full flex-col items-start gap-5',
    legend: 'text-gray-800 text-lg font-medium mb-4',
    outer:
      'mt-4 w-full rounded-lg border border-gray-300 bg-white px-6 py-3 text-lg shadow-sm focus:border-denim-blue-100 focus:ring-denim-blue-100 sm:mt-8 sm:flex-row sm:gap-0 sm:text-xl',
    input:
      'formkit-errors:border-red-500 formkit-invalid:border-red-500 h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500',
    label: 'ml-1 block text-base md:text-xl text-gray-500'
  },
  dropdown: {
    outer: 'w-full relative',
    wrapper:
      'w-full hover:bg-gradient-to-r focus-within:bg-gradient-to-r focus from-grad-start-200 to-grad-end-200 rounded-lg p-0.5 formkit-errors:text-red-500 formkit-invalid:text-red-500',
    inner:
      'block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-left text-base text-gray-700 shadow-sm placeholder-gray-300 hover:border-transparent focus:border-transparent focus:outline-none md:px-6 md:text-lg',
    selector: 'w-full text-left',
    dropdownWrapper:
      'absolute mt-3 top-full left-0 overflow-auto min-w-full max-h-[400px]',
    listbox: 'py-2 bg-white rounded-md border border-2 border-grad-start-200',
    listitem: 'py-1 px-6 cursor-pointer hover:bg-denim-blue-200/10'
  },
  email: textClassification,
  file: {
    outer: 'w-full',
    wrapper:
      'mb-1 text-base md:text-xl formkit-errors:text-red-500 formkit-invalid:text-red-500',
    inner:
      'relative hover:bg-gradient-to-r focus-within:bg-gradient-to-r focus from-grad-start-200 to-grad-end-200 rounded-lg p-0.5',
    fileRemove: 'absolute right-3 text-grad-start-70',
    fileList:
      'w-full mt-2 hover:bg-gradient-to-r focus-within:bg-gradient-to-r focus from-grad-start-200 to-grad-end-200 rounded-lg p-0.5 absolute',
    fileName: 'text-lg ml-7 line-clamp-1',
    fileItem: 'bg-white',
    noFiles: 'hidden',
    input:
      'relative block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-left text-base text-gray-500 shadow-sm focus:outline-none hover:border-transparent focus:border-transparent md:px-6 md:text-lg file:mr-4 file:border-0 file:text-base file:md:text-lg file:text-gray-500 file:bg-white file:py-0'
  },
  month: textClassification,
  number: {
    outer: 'w-full relative',
    wrapper:
      'relative w-full hover:bg-gradient-to-r focus-within:bg-gradient-to-r focus from-grad-start-200 to-grad-end-200 rounded-lg p-0.5 formkit-errors:text-red-500 formkit-invalid:text-red-500',
    inner:
      'block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-left text-base text-gray-700 shadow-sm placeholder-gray-300 hover:border-transparent focus:border-transparent focus:outline-none md:px-6 md:text-lg',
    input: 'focus:outline-none focus:border-none',
    label:
      'absolute mb-1.5 bottom-full left-0.5 text-left text-tiny text-gray-700',
    help: 'text-left text-grad-end-200 text-tiny mt-1 ml-1'
  },
  password: textClassification,
  radio: {
    wrapper: 'flex items-center py-1',
    fieldset: 'flex w-full flex-col items-start gap-2 sm:gap-5',
    outer:
      'mt-4 w-full rounded-lg border border-gray-300 bg-white px-3 sm:px-6 py-3 text-lg shadow-sm focus:border-denim-blue-100 focus:ring-denim-blue-100 sm:mt-8 sm:flex-row sm:gap-0 sm:text-xl',
    input:
      'formkit-errors:border-red-500 formkit-invalid:border-red-500 h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500',
    label:
      'ml-1 block text-tiny md:text-base md:text-xl text-gray-500 md:whitespace-pre md:white'
  },
  range: {
    inner: 'max-w-md',
    input:
      'form-range appearance-none w-full h-2 p-0 bg-gray-200 rounded-full focus:outline-none focus:ring-0 focus:shadow-none'
  },
  search: {},
  select: {
    label: 'mb-1 font-bold text-sm formkit-invalid:text-red-500',
    outer: 'w-full',
    wrapper:
      'w-full relative block hover:bg-gradient-to-r focus-within:bg-gradient-to-r focus from-grad-start-200 to-grad-end-200 rounded-lg p-0.5',
    input:
      'formkit-errors:border-red-500 formkit-invalid:border-red-500 relative block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-left text-base text-gray-700 shadow-sm placeholder-gray-500 hover:border-transparent focus:border-transparent focus:outline-none md:px-6 md:text-lg'
  },
  submit: buttonClassification,
  tel: textClassification,
  text: textClassification,
  textarea: {
    outer: 'w-full',
    wrapper:
      'text-base md:text-xl formkit-errors:text-red-500 formkit-invalid:text-red-500',
    inner:
      'w-full relative block hover:bg-gradient-to-r focus-within:bg-gradient-to-r focus mt-1 from-grad-start-200 to-grad-end-200 rounded-lg p-0.5',
    input:
      'formkit-errors:border-red-500 formkit-invalid:border-red-500 relative block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-left text-base text-gray-700 shadow-sm placeholder-gray-500 hover:border-transparent focus:border-transparent focus:outline-none md:px-6 md:text-lg'
  },
  time: textClassification,
  url: textClassification,
  week: textClassification
}

const config = defaultConfig({
  theme: 'genesis'
  // config: {
  //   classes: generateClasses(theme)
  // }
})

export default config
