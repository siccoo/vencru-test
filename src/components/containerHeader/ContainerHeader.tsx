interface ContainerProps {
    title: string;
    subTitle: string;
}
export const ContainerHeader = ({ title, subTitle }: ContainerProps) => {
    return (
        <div>
            <p className="text-gray-700 font-medium text-sm">{title} </p>
            <p className="text-gray-500 text-sm font-normal">{subTitle} </p>
        </div>
    );
};
