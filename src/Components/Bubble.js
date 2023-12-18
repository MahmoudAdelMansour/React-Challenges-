// export default function TheBar()
// {
//     return (
//         <>
//             <div className="Toolbar" onClick={() => {alert('you clicked on the theBar')}}>
//
//                 <button onClick={() => alert('Playing!')}>
//                     Play Movie
//                 </button>
//
//                 <button onClick={() => alert('Uploading!')}>
//                     Upload Image
//                 </button>
//             </div>
//         </>
//     );
// }
function MyButton({ onClick, children }) {
    return (
        <button onClick={ e => {
            e.stopPropagation();
            e.preventDefault();
            onClick();
        }}>
            {children}
        </button>
    );
    }

export default function Bigbar() {
    return (
        <div className="Toolbar" onClick={() => {
            alert('You clicked on the toolbar!');
        }}>
            <MyButton onClick={() => alert('Playing!')}>
                Play Movie
            </MyButton>
            <MyButton onClick={() => alert('Uploading!')}>
                Upload Image
            </MyButton>
        </div>
    );
}

