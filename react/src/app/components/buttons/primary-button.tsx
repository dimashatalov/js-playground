import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export default function PrimaryButton({
    children, onClick, disabled
}:Props) {

    if (typeof disabled == "undefined") {
        disabled = false;
    }

    return (<>
        <button className="primary-button" onClick={onClick} disabled={disabled}>{children}</button>
    </>);

}