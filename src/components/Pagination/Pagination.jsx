import './Pagination.css'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    const getPageNumbers = () => {
        const pages = [];
        const maxVisible = 5;
        
        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 5; i++) {
                    pages.push(i);
                }
            } else if (currentPage >= totalPages - 2) {
                for (let i = totalPages - 4; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                for (let i = currentPage - 2; i <= currentPage + 2; i++) {
                    pages.push(i);
                }
            }
        }
        return pages;
    };

    return (
        <div className="pagination">
            <button 
                className="pagination-button"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            
            {currentPage > 3 && totalPages > 5 && (
                <>
                    <button 
                        className="pagination-button"
                        onClick={() => onPageChange(1)}
                    >
                        1
                    </button>
                    {currentPage > 4 && <span className="pagination-ellipsis">...</span>}
                </>
            )}

            {getPageNumbers().map(page => (
                <button
                    key={page}
                    className={`pagination-button ${currentPage === page ? 'active' : ''}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}

            {currentPage < totalPages - 2 && totalPages > 5 && (
                <>
                    {currentPage < totalPages - 3 && <span className="pagination-ellipsis">...</span>}
                    <button 
                        className="pagination-button"
                        onClick={() => onPageChange(totalPages)}
                    >
                        {totalPages}
                    </button>
                </>
            )}

            <button 
                className="pagination-button"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;

