import React from 'react';
import Gallery from 'react-photo-gallery';
import { Button } from 'reactstrap';
import history from '../Routes/history'

const SingleImage = ({ photos, title, direction, destination }) => {
    return (
        <div>
            <Gallery photos={photos} direction={direction} />
            {/* <h2 style={{
                //display: "flex",
                // justifyContent: "center",
                // alignItems: "right",
                textAlign: "left",
                position: "relative",
                color: "white"
            }}>{title}</h2> */}
            <div
                style={{
                    //display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                    margin: "15x",
                    position: "relative",
                    top: 20
                }}
            >
                <Button className="btn-round" color="default" size="lg" outline
                    type="button"
                    onClick={() => {
                        console.log("Going to destination", destination);
                        history.push(destination);
                    }}
                >{title}</Button>
            </div>
        </div >
    );
}

export default SingleImage;
