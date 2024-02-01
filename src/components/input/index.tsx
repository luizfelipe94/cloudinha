type InputProps = {
    name: string;
    type: string;
    placeholder: string;
    error?: string;
};

export function Input({ name, type, placeholder, error }: InputProps) {
    return (
        <>
            <input
                className="w-full border-2 rounded-md h-11 px-2"
                placeholder={placeholder}
                type={type}
                id={name}
            />
            {error && <p className="text-red-500 my-1">{error}</p>}
        </>
    );
}