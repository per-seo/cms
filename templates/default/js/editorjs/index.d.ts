import { BlockTool, BlockToolConstructorOptions, BlockToolData, PasteConfig, PasteEvent, SanitizerConfig, ToolboxConfig } from '@editorjs/editorjs';

/**
 * CodeTool for Editor.js
 * @version 2.0.0
 * @license MIT
 */
/**
 * Data structure for CodeTool's data
 */
export type CodeData = BlockToolData<{
    /**
     * The code content input by the user
     */
    code: string;
}>;
/**
 * Configuration options for the CodeTool provided by the user
 */
export interface CodeConfig {
    /**
     * Placeholder text to display in the input field when it's empty
     */
    placeholder: string;
}
/**
 * Options passed to the constructor of a block tool
 */
export type CodeToolConstructorOptions = BlockToolConstructorOptions<CodeData>;
/**
 * Code Tool for the Editor.js allows to include code examples in your articles.
 */
export default class CodeTool implements BlockTool {
    /**
     * API provided by Editor.js for interacting with the editor's core functionality
     */
    private api;
    /**
     * Indicates whether the editor is in read-only mode, preventing modifications
     */
    private readOnly;
    /**
     * Placeholder text displayed when there is no code content
     */
    private placeholder;
    /**
     * Collection of CSS class names used by CodeTool for styling its elements
     */
    private CSS;
    /**
     * DOM nodes related to the CodeTool, including containers and other elements
     */
    private nodes;
    /**
     * Stores the current data (code and other related properties) for the CodeTool
     */
    private _data;
    /**
     * Notify core that read-only mode is supported
     * @returns true if read-only mode is supported
     */
    static get isReadOnlySupported(): boolean;
    /**
     * Allows pressing Enter key to create line breaks inside the CodeTool textarea
     * This enables multi-line input within the code editor.
     * @returns true if line breaks are allowed in the textarea
     */
    static get enableLineBreaks(): boolean;
    /**
     * Render plugin`s main Element and fill it with saved data
     * @param options - tool constricting options
     * @param options.data — previously saved plugin code
     * @param options.config - user config for Tool
     * @param options.api - Editor.js API
     * @param options.readOnly - read only mode flag
     */
    constructor({ data, config, api, readOnly }: CodeToolConstructorOptions);
    /**
     * Return Tool's view
     * @returns this.nodes.holder - Code's wrapper
     */
    render(): HTMLDivElement;
    /**
     * Extract Tool's data from the view
     * @param codeWrapper - CodeTool's wrapper, containing textarea with code
     * @returns - saved plugin code
     */
    save(codeWrapper: HTMLDivElement): CodeData;
    /**
     * onPaste callback fired from Editor`s core
     * @param event - event with pasted content
     */
    onPaste(event: PasteEvent): void;
    /**
     * Returns Tool`s data from private property
     * @returns
     */
    get data(): CodeData;
    /**
     * Set Tool`s data to private property and update view
     * @param data - saved tool data
     */
    set data(data: CodeData);
    /**
     * Get Tool toolbox settings.
     * Provides the icon and title to display in the toolbox for the CodeTool.
     * @returns An object containing:
     * - icon: SVG representation of the Tool's icon
     * - title: Title to show in the toolbox
     */
    static get toolbox(): ToolboxConfig;
    /**
     * Default placeholder for CodeTool's textarea
     * @returns
     */
    static get DEFAULT_PLACEHOLDER(): string;
    /**
     *  Used by Editor.js paste handling API.
     *  Provides configuration to handle CODE tag.
     * @returns
     */
    static get pasteConfig(): PasteConfig;
    /**
     * Automatic sanitize config
     * @returns
     */
    static get sanitize(): SanitizerConfig;
    /**
     * Handles Tab key pressing (adds/removes indentations)
     * @param event - keydown
     */
    private tabHandler;
    /**
     * Create Tool's view
     * @returns
     */
    private drawView;
}
