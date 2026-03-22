import Image from "next/image"
import playButton from "../app/assets/play-button.png"
import square from "../app/assets/square.png"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


const VideoBanner = ({
    videoBanner
}) => {
    return (
        <div className="relative">
            <Image src={videoBanner} alt="videoBanner"
                width={500}
                height={500}
            />

            <Image src={square} alt="square"
                width={20}
                height={20}
                className="absolute bottom-5 right-5"
            />

            <>
                <Dialog>
                    <DialogTrigger asChild>
                        <Image src={playButton} alt="playButton"
                            width={80}
                            height={80}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                        />

                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>Hello</DialogTitle>
                            <DialogDescription>
                                This dialog is used to display additional information about the current page.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex items-center space-x-2">
                            <div className="grid flex-1 gap-2">

                            </div>

                        </div>
                        <DialogFooter className="sm:justify-start">
                            <DialogClose asChild>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </>
        </div>
    )
}

export default VideoBanner