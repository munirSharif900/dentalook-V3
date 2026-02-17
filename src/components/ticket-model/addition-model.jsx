export default function AdditionModel() {
    const [catalogOpen, setCatalogOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("hardware");
    const [selectedItem, setSelectedItem] = useState(null);
    return (
        <div>
            <p className="font-medium">Third Tab</p>
            <p className="text-sm text-gray-600">Ye third tab ka data hai</p>
            <button onClick={() => setCatalogOpen(true)}>
                View DL Catalog
            </button>
        </div>
    );
}