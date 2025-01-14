/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { TextColorType, TextSizeType, TextVariantType } from "./common/types";
import { RichTextField } from "@prismicio/client";
export { TextColorType, TextSizeType, TextVariantType } from "./common/types";
export { RichTextField } from "@prismicio/client";
export namespace Components {
    interface AppButton {
        "buttonStyle"?: { [key: string]: any };
    }
    interface AppHome {
    }
    interface AppImage {
        "alt"?: string;
        "height"?: number;
        "imgStyle"?: { [key: string]: any };
        "objectFit"?: 'cover' | 'contain';
        "src": string;
        "width"?: number;
    }
    interface AppRoot {
    }
    interface AppText {
        "color"?: TextColorType;
        "size"?: TextSizeType;
        "variant"?: TextVariantType;
    }
    interface ContentBox {
        "titleText"?: string;
    }
    interface MsCharCard {
    }
    interface RichTextRenderer {
        "field": RichTextField;
    }
}
declare global {
    interface HTMLAppButtonElement extends Components.AppButton, HTMLStencilElement {
    }
    var HTMLAppButtonElement: {
        prototype: HTMLAppButtonElement;
        new (): HTMLAppButtonElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppImageElement extends Components.AppImage, HTMLStencilElement {
    }
    var HTMLAppImageElement: {
        prototype: HTMLAppImageElement;
        new (): HTMLAppImageElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppTextElement extends Components.AppText, HTMLStencilElement {
    }
    var HTMLAppTextElement: {
        prototype: HTMLAppTextElement;
        new (): HTMLAppTextElement;
    };
    interface HTMLContentBoxElement extends Components.ContentBox, HTMLStencilElement {
    }
    var HTMLContentBoxElement: {
        prototype: HTMLContentBoxElement;
        new (): HTMLContentBoxElement;
    };
    interface HTMLMsCharCardElement extends Components.MsCharCard, HTMLStencilElement {
    }
    var HTMLMsCharCardElement: {
        prototype: HTMLMsCharCardElement;
        new (): HTMLMsCharCardElement;
    };
    interface HTMLRichTextRendererElement extends Components.RichTextRenderer, HTMLStencilElement {
    }
    var HTMLRichTextRendererElement: {
        prototype: HTMLRichTextRendererElement;
        new (): HTMLRichTextRendererElement;
    };
    interface HTMLElementTagNameMap {
        "app-button": HTMLAppButtonElement;
        "app-home": HTMLAppHomeElement;
        "app-image": HTMLAppImageElement;
        "app-root": HTMLAppRootElement;
        "app-text": HTMLAppTextElement;
        "content-box": HTMLContentBoxElement;
        "ms-char-card": HTMLMsCharCardElement;
        "rich-text-renderer": HTMLRichTextRendererElement;
    }
}
declare namespace LocalJSX {
    interface AppButton {
        "buttonStyle"?: { [key: string]: any };
    }
    interface AppHome {
    }
    interface AppImage {
        "alt"?: string;
        "height"?: number;
        "imgStyle"?: { [key: string]: any };
        "objectFit"?: 'cover' | 'contain';
        "src"?: string;
        "width"?: number;
    }
    interface AppRoot {
    }
    interface AppText {
        "color"?: TextColorType;
        "size"?: TextSizeType;
        "variant"?: TextVariantType;
    }
    interface ContentBox {
        "titleText"?: string;
    }
    interface MsCharCard {
    }
    interface RichTextRenderer {
        "field"?: RichTextField;
    }
    interface IntrinsicElements {
        "app-button": AppButton;
        "app-home": AppHome;
        "app-image": AppImage;
        "app-root": AppRoot;
        "app-text": AppText;
        "content-box": ContentBox;
        "ms-char-card": MsCharCard;
        "rich-text-renderer": RichTextRenderer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-button": LocalJSX.AppButton & JSXBase.HTMLAttributes<HTMLAppButtonElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-image": LocalJSX.AppImage & JSXBase.HTMLAttributes<HTMLAppImageElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-text": LocalJSX.AppText & JSXBase.HTMLAttributes<HTMLAppTextElement>;
            "content-box": LocalJSX.ContentBox & JSXBase.HTMLAttributes<HTMLContentBoxElement>;
            "ms-char-card": LocalJSX.MsCharCard & JSXBase.HTMLAttributes<HTMLMsCharCardElement>;
            "rich-text-renderer": LocalJSX.RichTextRenderer & JSXBase.HTMLAttributes<HTMLRichTextRendererElement>;
        }
    }
}
