import { isEmpty } from "lodash";

export const handleStyledCss = (string: string, styled: Record<string, string>) => {
    if (!string) return ''

    const formatStr = string.split(' ');

    return formatStr.reduce((str, character: string) => {
        if (character) {
            if (styled[character]) {
                return str + ' ' + styled[character]
            }
        }

        return str
    }, '')
}


const isObject = (obj: Record<any, any>) => {
    return !Array.isArray(obj) && obj.constructor === Object && typeof obj === 'object';
}


const handleObjClassNames = (data: Record<string, string>, styled: Record<string, string>) => {
    const str = []

    for (const [key, value] of Object.entries(data)) {
        if (value && styled[key]) {
            str.push(styled[key])
        }
    }

    return str
}

const recursionClassNames = (args: any[], data: Record<string, string>): string[] => {

    return args.reduce((acc: string[], arg) => {
        if (!isEmpty(arg) || arg) {
            if (Array.isArray(arg)) {
                return [...acc, ...recursionClassNames(arg, data)]
            }

            if (isObject(arg)) {
                return [...acc, ...handleObjClassNames(arg, data)]
            }

            return data[arg] ? [...acc, data[arg]] : acc
        }

        return acc
    }, [])
}

export function classNames(this: Record<string, string>, ...args: any[]): string {
    if (isEmpty(args)) return ''

    return Array.from(new Set(recursionClassNames(args, this))).join(' ')
}