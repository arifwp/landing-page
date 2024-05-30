import FileSaver from "file-saver";

export const downloadImage = (src: string) => {
  FileSaver.saveAs(`http://localhost:3000${src}`, "KETAON FAIR.jpg");
};
