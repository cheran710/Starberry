import './contentcard.scss';

interface ContentCardProps {
    data: any;
    showPrice: boolean;
    onClick?: (property: any) => void;
}

const ContentCard: React.FC<ContentCardProps> = ({ data, showPrice, onClick }) => {
    const item = data.attributes || data;

    const handleClick = () => {
        if (onClick) {
            onClick(data);
        }
    };

    return (
        <div className="custom-card" onClick={handleClick}>
            <img src={item?.thumbnail} alt={item?.title || 'property'} />
            <div className="card-content">
                <h3>{item?.title || 'No Title'}</h3>
                <p>{item?.display_address || 'No Address Available'}</p>
                {showPrice && <strong>{item.price?.toLocaleString()} €</strong>}
            </div>
        </div>
    );

};

export default ContentCard;
