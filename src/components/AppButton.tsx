import Button from '@mui/material/Button';

interface Props {
    label: string;
}

export default function AppButton({label}: Props): JSX.Element {
    return (
        <Button variant="outlined">
            {label}
        </Button>
    );
}