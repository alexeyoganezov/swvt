import { View } from '../../../utils/framework';
import './footer.css';

export class FooterView extends View {
  getHTML(): string {
    return `
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <p class="footer__text">
                Swords and Wizardry Virtual Tabletop
                <br />Developed by <a href="mailto:alexey@oganezov.work">Alexey Oganezov</a> for <a href="https://www.froggodgames.com/product/swords-wizardry-complete-rulebook/" target="_blank">Swords & Wizardry</a> and compatible OSR games
                <br />Not affiliated with <a href="http://oldschoolgamerradio.com/">Matthew J. Finch</a>, <a href="https://www.drivethrurpg.com/browse/pub/2725/Mythmere-Games">Mythmere Games</a> or <a href="https://www.froggodgames.com/">Frog God Games</a>
                <br />Swords & Wizardry and Mythmere Games are trademarks of Matthew J. Finch
              </p>
            </div>
            <div class="col-lg-4">
              <p class="footer__text">
                <a href="https://dicefont.com/">Dice Font</a> created by <a href="https://twitter.com/fponticelli">Franco Ponticelli</a> is licensed by <a href="http://scripts.sil.org/OFL">OFL 1.1</a>
                <br /><a href="https://www.drivethrurpg.com/product/284133/144-Generic-Tokens-for-TTRPGs">Generic Tokens</a> created by <a href="https://twitter.com/GameGrue">GameGrue</a> are licensed by <a href="https://creativecommons.org/licenses/by/4.0/legalcode">CC BY 4.0</a>
                <br />Demo dungeons generated by <a href="https://watabou.itch.io/one-page-dungeon">One Page Dungeon</a> from <a href="https://twitter.com/watawatabou">watabou</a>
                <br />Demo maps generated by <a href="https://www.redblobgames.com/maps/mapgen2/">Polygon Map Generator</a> from <a href="https://www.redblobgames.com/">Red Blob Games</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
