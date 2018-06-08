# feeds.vue
This component is a wrapper for the entire news feed.

## Description:
- A wrapper component to contain the feed cards.
- This component renders posts
- This component is rendered from home.vue

## Code:
public/js/src/components/home/feeds.vue


<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">



<script>
import moduleMixin from '../../public/js/src/mixins/module-mixin'
export default {
    data() {
        return {
            showAlert1: true,
        };
    },
    methods: {
        resetAlerts() {
            this.showAlert1 = true;
        }
    },
  mixins: [
    moduleMixin
  ],
  computed: {
    feeds(){
      return this.p.feeds
    }
  }
}
</script>
</script>