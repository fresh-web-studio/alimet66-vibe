import OverlayMenu from "@/modules/OverlayMenu";
import ModalMore from "@/modules/ModalMore";
import InputMaskCollection from '@/modules/InputMaskCollection';

new OverlayMenu()
new InputMaskCollection()

if (typeof document !== 'undefined') { //Перед обращением к document, убедиться, что объект доступен
    // Сразу после загрузки страницы проверяем путь и показываем карту
    document.addEventListener('DOMContentLoaded', () => {
        const mapContainer = document.querySelector('.map');
        if (window.location.pathname === '/') {
            mapContainer.style.display = 'block';
        }
    })
}

new ModalMore()