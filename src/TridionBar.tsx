import { useHeadlessXpmContext } from "./HeadlessXpmProvider";
import './HeadlessXpmEditor.css';

export interface ITridionBarProps {
  toggleXpm: boolean;
  setToggleXpm: (showTridionBar: boolean) => void;
}

export const TridionBar = ({ setToggleXpm, toggleXpm }: ITridionBarProps) => {

  const { showPageEditorLink, editorUrl, pageId, showPage  } = useHeadlessXpmContext();

  const handlePage = () => {
    if (showPage) {
      const link = `${editorUrl}/page?item=${pageId}&tab=general.content`
      window.open(link, "_blank")
    }
  }
  return (
    <div className="headlessXpmBar" >
      <div className="headlessXpmBarContainer">
        <div className="headlessXpmBrandLogo">
          {/* <img src={Logo} title="logo" width="30" height="34" /> */}
        </div>
        <div className="headlessXpmBarButtonGroup">
          {showPageEditorLink &&
            <button className="headlessXpmBarButton" onClick={handlePage}>
              <svg viewBox="64 64 896 896" focusable="false" data-icon="form" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path
                  d="M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z">
                </path>
                <path
                  d="M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z">
                </path>
              </svg>
            </button>
          }
          <button className={`headlessXpmBarButton ${toggleXpm ? "headlessXpmBarButtonActive" : ""}`} onClick={() => setToggleXpm(!toggleXpm)} title="Edit Components" >
            <svg viewBox="64 64 896 896" focusable="false" data-icon="edit" width="1em" height="1em" fill="currentColor"
              aria-hidden="true">
              <path
                d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z">
              </path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}