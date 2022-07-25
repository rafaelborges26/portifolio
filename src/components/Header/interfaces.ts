export interface IHeader extends IHeaderStyles {
    setDefinedOption: (option: 'about' | 'projects' | 'contact') => void
    optionDefined: 'about' | 'projects' | 'contact'
}


export interface IHeaderStyles {
    active?: boolean;
    menuActive?: boolean
} 