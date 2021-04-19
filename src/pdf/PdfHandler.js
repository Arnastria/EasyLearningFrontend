import materi1 from '../pdf/Materi1';
import materi2 from '../pdf/Materi2';
import materi3 from '../pdf/Materi3';
import materi4 from '../pdf/Materi4';
import materi5 from '../pdf/Materi5';
import materi6 from '../pdf/Materi6';
import materi7 from '../pdf/Materi7';

export function getSlide(number) {
    const slides = [materi1, materi2, materi3, materi4, materi5, materi6, materi7];
    return slides[parseInt(number) - 1];
}